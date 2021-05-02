module.exports = {
  action(msg, client, args) {
	var mention = client.guild.members.cache.random();
	msg.channel.send(`${mention}` + `${args}`);
  },
  help: "It's \"@someone\" reborn!"
}
//  var user = client.users.random();
//                                ^
//
//TypeError: Cannot read property 'random' of undefinedv
