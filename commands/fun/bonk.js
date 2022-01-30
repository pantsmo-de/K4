const { MessageEmbed } = require('discord.js');
module.exports = {
  action(msg,args,client){
    const bonkGif = ['https://c.tenor.com/TbLpG9NCzjkAAAAC/bonk.gif','https://media1.giphy.com/media/30lxTuJueXE7C/giphy.gif']
    var mention = msg.mentions.members.first();
    const bonk = new MessageEmbed()
      .setTitle("Bonk!")
      .setColor('#FF03F6')
      .setDescription('description')
      .setAuthor("Buh", 'https://cdn.discordapp.com/emojis/765953291535908897.png', 'https://discord.gg/Zmm6Rpt')
      .addField('Bonk!', `<@!${msg.author.id}> bonks <@!${mention.user.id}>.`, true)
      .setImage(bonkGif[Math.floor(Math.random()*bonkGif.length)])
    if (mention !== null) {
      msg.channel.send({embeds: [bonk]})
    }else{
      msg.channel.send("I bonk "+ msg.author.id +" for screwing this bot over.")
    }
  },
  help: "You can get me to bonk someone for you."
}
