## __**Welcome to Buh - we won't do NFTs here**__
Started as a project named Kitty under a server (Loner Campfire, no longer exists) which I previously modded with my friends, **Buh** is meant to be a sort-of "operational baseline" for Discord bots, off which you can base your bot by adding more modules. It's also my attempt at building the ultimate Discord bot for gamers, weebs and casual Discord users alike, to replace cashcow bots such as Mee6 and Tatsumaki. So my "bot framework" excuse may be redundant.

The name "Buh" comes from an otonomapeia of when you try to say something, but you just give up thinking of anything. At least, that's what it is to me. Buh.

## **Why use Buh?**
- One Discord bot looks better on a server than five, like jesus christ.
- This bot doesn't do NFTs.
- ???

## **Help needed**
These are general problems that I can't figure out a solution to, because I clearly haven't coded enough, and I am a stupid boy:
- Reload function needs to delete the list of commands and reload them, after a decache.
- ``play.js`` needs a channel searcher, which looks up the channel where the message sender is in.
- In ``bonk.js``, ``8ball.js`` or any other feature that uses embed, only empty messages are sent.

These problems appeared after updating both Discord.js (to v13.2.0) and Node.js (to v17.0.1):
- guildMemberAdd couldn't be triggered for a reason I have yet to find out
- ``animal.js`` can't parse the link from the "shibe.online" request
- play.js no longer could execute ``channel.join``

#### How to build a new module into Buh
I am currently building up two filters to prevent NSFW and Admin-only commands from being executed by regulars. In the meantime, I am using a regular ``module.exports`` command wrapper, with a "help" property.
```
module.exports = {
  action(client,msg) {
  // Command's inner workings here
  // Instead of "action", you may also use "async action"
  },
  help: "Help text here."
}
```
If a command needs to be added into the main bot core (I don't know why you'd want to do that, but I won't judge), I use the following template:
```
cmds.set('help', {
  action(msg, args) {
    // Command here
  },
  help: "Help text here."
})
```
#### Special thanks to contributors:
- Ratvibe - helped create the original iterations of Buh with me
- Mihail - crafted the command file search function with klaw-sync, and made sure I felt dumb every now and then

## **Self-hosting**
#### What to know?
Self-hosting is quite simple. I *want* to make self-hosting Buh simple. However, it may take a bit of space. This big boy, with its dependencies, is at least 119 megabytes, as of writing this readme. That's over tenth of a gigabyte, so if you have a poopy little laptop or a poopy little Samsung phone that can't hold any more than a single episode of Nostalgia Critic, the entire Creative Cloud package, and a few apps, I wouldn't recommend self-hosting to you.
#### Config
For now, in ``config.example.json``, there are six properties:
* The "dtoken" - which stands for **D**iscord bot **token**
* The "comdir" - the **com**mand **dir**ectory, which is automatically set to be the ``commands`` folder. If you do rename the folder, remember to update this property too.
* The "evntdir" - the **ev**e**nt** **dir**ectory, same thing, but this one is about listeners.
* The "prefix" - the... prefix. You can go nuts with this.
* The "admin" - this is where, in case you are only using this for your own server, you can put your admin role IDs.
* The "premium" - this is where, same case as with "admin", you put your donator role IDs.

#### Dependencies
To run Buh, you need the following dependencies.
- Node.js
- Discord.js
- [klaw-sync](https://www.npmjs.com/package/klaw-sync) (For command file searching)
- [decache](https://www.npmjs.com/package/decache) (Should be of some help in updating commands live)
- [chalk](https://www.npmjs.com/package/chalk) (Ooga booga console log colorful)
- [bopen](https://www.npmjs.com/package/bopen) (For opening web pages within the self-host side, *without* closing the command prompt and thus the operation)
- Ytdl-core (For playback)
- Ffmpeg-binaries (To get playback to work properly)
- the Discord Developer Portal's secret bot key, oooooh (you *do* put it on Discord)

#### What's next?
After installing the bot and its dependencies, setting up your own config, and getting the secret spooky API key, all you have to do to run it is go to the directory you put the bot in, and write ``node bot.js``.
