const {Client,Intents} = require("discord.js");
const klawSync = require('klaw-sync')
const path = require('path')
const decache = require('decache')
const chalk = require('chalk')
const open = require('bopen')
const config = require("./config.json")
const fs = require('fs') /* Just for the event wrapper */

/* Notices for the command chart*/
const success = chalk.black.bgGreen("SUCCESS") + " "
const failure = chalk.black.bgRed("FAILURE") + " "
const error = chalk.black.bgYellow("ERROR") + " "

const cmdsDir = path.resolve(__dirname, config.comdir)
const cmds = new Map(klawSync(cmdsDir, {nodir: true})
  .map(({path: filepath}) => [
    path.basename(filepath, '.js'),
    require(filepath)
]))
cmds.set('help', {
  action(msg, args) {
    msg.channel.send(cmds.get(args)?.help ?? "Please be more specific or ask about another command. Use \"!help\" with a command you\'d like to know more about. <:buh:765953291535908897> <:nice:771120085896265769>")
  },
  help :"You already know how to use this lol"
})
cmds.set('commands',{
  action(msg,args){
    msg.channel.send('```\n'+[...cmds.keys()].map(x=>`!${x}`).join('\n')+'\n```');
  },
  help :"It\'s a command list, dummy."
})
cmds.set('reload',{
  action(client,msg){
    if(msg.guild.roles.cache.find(config.admin)) { /*CAN'T READ PROPERTY OF 'ROLES' OF UNDEFINED go fuck yourself*/
        decache(cmds.keys());
        delete cmds;
    }else{
      msg.channel.send("Sorry, dumbo, this command is for admins only. <:diamond_pants:765481756051767307>")
    }
  },
  help:"Reloads commands. (Work in progress)"
})
cmds.set('prefix',{
  action(msg,client) {
    msg.channel.send("Prefix set as ``"+ config.prefix +"``.")
  },
  help :"Tells you the prefix."
})
cmds.set('die',{
    action(msg){
      if(msg.guild.roles.cache.find(config.admin)) {
        throw '';
      }else{
        msg.channel.send("Sorry, dumbo, this command is for admins only. <:diamond_pants:765481756051767307>")
      }
    },
    help :"Kills the bot. (Admin Only)"
})
const runcmd = (cmd, msg, args) => {
  const fn = cmds.get(cmd)
  if (fn) fn.action(msg, args)
  else console.error("User attempted to execute", cmd)
}
const yeet = x => {throw x;}
/*cmds.set('loop', {
  action(msg, args) {
    const matches = /(?<times>\d+)\s+(?<cmd>\w+) ?(?<args>.*)/.exec(args) ?? yeet(new Error('malformed tho'))
    const {times, cmd, new_args} = matches
    runcmd(cmd, msg, new_args, times)
  },
  help: 'reepeetes a command liek `!loop <times> <cmd> [...<arguments>]` lal'
})*/
console.log(success + 'Loaded commands: \n' + [...cmds.keys()].map(x=>`  -${x}`).join('\n'))

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES] });

/*
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
// Loop over each file
for (const file of events) {
  // Split the file at its extension and get the event name
  const eventName = file.split(".")[0];
  // Require the file
  const event = require(`./events/${file}`);
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    // without going into too many details, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    // This line is awesome by the way. Just sayin'.
  console.log(success + 'Loaded event: \n' + eventName)
  client.on(eventName, event.bind(null, client));
}
*/

/* Profile settings */
client.on('ready', c => {
  client.user.setActivity("\|\| Use the prefix \""+config.prefix+"\"", { type: 'PLAYING' })
})

/* Client.on actions */
client.on('messageCreate', msg => {
  const { content } = msg
  //console.log('message', content, msg)
  if (msg.author.id == client.user.id || !content.startsWith(config.prefix)) return
  const space = content.indexOf(' ')
  const split = space === -1 ? content.length : space
  const cmd = content.slice(1, split)
  const args = content.slice(split + 1)
  runcmd(cmd, msg, args)
})

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
  console.log(success + 'Loaded event: ' + eventFiles);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Enable this command when you release the code to the public
//open("manual/introduction.html")
console.log(success + "Currently working.")
client.login(config.dtoken)
