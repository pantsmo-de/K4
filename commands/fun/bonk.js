module.exports = {
  action(msg,args){
    var mention = msg.mentions.members.first();
    if(typeof mention != "undefined") {
      msg.channel.send("<@" + msg.author + "> bonks <@" + mention.user.id + ">.")
    }else{
      msg.channel.send("Kitty bonks <@" + msg.author + ">.")
    }
  },
  help: "You can get Kitty to bonk someone."
}
