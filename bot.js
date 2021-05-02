const {Client} = require("discord.js");
const klawSync = require('klaw-sync')
const path = require('path')
const chalk = require('chalk') /* Ooga booga console log go colorful */
const open = require('bopen') /* For opening web pages within the self-host side */
const config = require("./config.json")

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
    msg.channel.send(cmds.get(args)?.help ?? `\${args}? I hardly knew her!`)
  },
  help :"You already know how to use this lol"
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

const client = new Client();

client.on('message', msg => {
  const { content } = msg
  //console.log('message', content, msg)
  if (msg.author.id == client.user.id || !content.startsWith(config.prefix)) return
  const space = content.indexOf(' ')
  const split = space === -1 ? content.length : space
  const cmd = content.slice(1, split)
  const args = content.slice(split + 1)
  runcmd(cmd, msg, args)
})

// Enable this command when you release the code to the public
//open("manual/introduction.html")
console.log(success + "Currently working.")
client.login(config.dtoken)
