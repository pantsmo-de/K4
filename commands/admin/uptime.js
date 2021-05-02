module.exports = {
  action(msg, args) {
    let totalSeconds = (msg.client.uptime / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.round(totalSeconds % 60);
      const uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      msg.channel.send('This bot has been up for ' + uptime);
  },
  help: "Check up on how long the bot has been up."
}
/*
msg.channel.send('This bot has been up for '+uptime);
                    ^

TypeError: Cannot read property 'send' of undefined
*/
