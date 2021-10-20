module.exports = {
  async action(client,msg) {
  const GuildA = (client.guilds.cache.map(guild => guild.id)).length;
  const ChannelA = (client.channels.cache.map(guild => guild.id)).length;
  const UserA = (client.users.cache.map(guild => guild.id)).length;
  console.log(GuildA, ChannelA, UserA);
  },
  help:"Tells you a little about myself. (Work in progress)"
}
