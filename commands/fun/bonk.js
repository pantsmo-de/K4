const { MessageEmbed } = require('discord.js');
module.exports = {
  action(msg,args,client){
    const bonkGif = ['https://c.tenor.com/TbLpG9NCzjkAAAAC/bonk.gif','https://media1.giphy.com/media/30lxTuJueXE7C/giphy.gif']
    var mention = msg.mentions.members.first();
    var bonk = new MessageEmbed()
      .setTitle('Bonk!')
      .setColor('#FF03F6')
      .setAuthor('Buh','https://cdn.discordapp.com/emojis/765953291535908897.png', 'https://discord.gg/Zmm6Rpt')
      .setDescription("<@" + msg.author + "> bonks <@" + mention.user.id + ">.")
      .setImage(bonkGif[Math.floor(Math.random()*bonkGif.length)])
    if(typeof mention != "undefined") {
      msg.channel.send(bonk)
    }else{
      msg.channel.send("I bonk "+msg.author+" for screwing this bot over.")
    }
  },
  help: "You can get me to bonk someone for you."
}
