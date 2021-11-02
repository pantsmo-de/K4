/*let conn
let playing
const yeet = err => {throw err instanceof Error ? err : new Error(err)}
module.exports = {
  async action(msg, args, ytdl) {
    const ytdl = require("ytdl-core");
    const { channel } = msg.member?.voice ?? yeet("cannot join channel")
    const stream = ytdl(args.trim(), { filter : "audioonly" })
    conn = await channel.join()
    const dispatcher = playing = conn.play(stream, {type: "unknown"})
      .on("finish", () => playing === dispatcher && channel.leave())
  },
  help:"Plays YouTube videos. Suck it, Rythm."
}*/
module.exports = {
  action(msg, args){
    msg.channel.send("Whoa there, buster! This command is still being fixed! Maybe try another command in the meantime.")
  }
}
/*module.exports = {
  action(msg, args, ytdl){
    const streamOptions = { seek: 0, volume: 1 };
    var playing;
    var vc = msg.member.voice.channel;
    if(!playing && typeof vc != "undefined") {
      vc.join()
        .then(connection => {
          const stream = ytdl(args[1], { filter : 'audioonly' });
          const dispatcher = connection.play(stream, streamOptions);
          playing = true;
          dispatcher.on('end', function() {
            vc.leave();
            dispatcher.destroy();
            playing = false;
          });
        });
      } else if(!playing) {
          console.log('Please join a voice channel.');
        } else {
        console.log('Audio is already being played.');
      }
    //Connects, but wouldn't disconnect
  }
}*/
