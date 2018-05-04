var Spark = require("sparkbots")
const Command = Spark.command("die")
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('Kills the bot')
module.exports = Command;

Command.code = (client, message) => {
  message.channel.send(die())
        .then(() => {
            process.exit()
        })
  
}
function die() {
    return (":boom: Killing the bot...");
}
