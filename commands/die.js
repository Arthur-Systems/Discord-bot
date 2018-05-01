var Spark = require("sparkbots")
const Command = Spark.command("die")
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('Kills the bot')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(":ok_hand::skin-tone-1:  Killing the bot...")
        .then(() => {
            process.exit()
        })
  
}