module.exports = {
  async action(msg, client) {
    //if(msg.guild.id.roles.cache.find(config.admin)) {
      const pingfacts = ['Did you know that **1000 ms** is **one single second**? That\'s 1/6th of a Vine! Makes you appreciate time more, huh.','Did you know that ping amounts of **100 ms** and below are average for most broadband connections?', 'Did you know that **over 170 games** will **reject** your connection entirely, if your ping is slower than 100ms?']
      msg.channel.send('The amount of latency between us is ``'+`${Date.now() - msg.createdTimestamp} ms`+'``. \n'+pingfacts[Math.floor(Math.random()*pingfacts.length)]);
    //} else {
    //  msg.channel.send("Sorry, dumbo, this command is for admins only. <:diamond_pants:765481756051767307>")}
  },
  help:"Pong."
}
