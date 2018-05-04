var Spark = require("sparkbots")
const Command = Spark.command("die")
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('Stops the bot')
module.exports = Command;

Command.code = (client, message) => {
<<<<<<< HEAD

  message.channel.send( return ":ok_hand::skin-tone-1:  Killing the bot...")
        .then(() => {
            process.exit()
        })
=======
  message.channel.send(die())
        .then(() => {
            process.exit()
        })
  
}
function die() {
    return (":boom: Killing the bot...");
>>>>>>> f7351c7fa6fb56dfae8025b66aa35600ebc3ac92
}
