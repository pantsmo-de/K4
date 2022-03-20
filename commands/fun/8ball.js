const { MessageEmbed } = require('discord.js');
module.exports = {
  action(msg,args,client){
    const answers = [
          "It is certain",
      		"Without a doubt",
      		"Definitely",
      		"Most likely",
      		"Outlook good",
      		"Yes!",
      		"Try again",
      		"Reply hazy",
      		"Can't predict",
      		"No!",
      		"Unlikely",
      		"Sources say no",
      ]
    let question = args[0]
    var ball = new MessageEmbed()
      .setTitle('Buh says:')
      .setColor('#FF03F6')
      .setAuthor('Buh','https://cdn.discordapp.com/emojis/765953291535908897.png', 'https://discord.gg/Zmm6Rpt')
      .setDescription('**'+question+'**\n'+answers[Math.floor(Math.random()*answers.length)])
    if(question != "undefined") {
      msg.channel.send({ embeds: [ball] })
    }else{
      console.log("Ask me a question first!")
    }
  },
  help: "You can get me to bonk someone for you."
}
