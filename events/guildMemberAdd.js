module.exports = {
  name: 'guildMemberAdd',
	once: true,
	execute(client) {
    console.log("Event triggered: guildMemberAdd.");
    member.guild.systemChannel.send(`${member.tag} https://www.youtube.com/watch?v=a3mZa8WHPWk`);
	},
}
