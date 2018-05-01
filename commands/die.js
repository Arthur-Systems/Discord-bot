var Spark = require("sparkbots")
const Command = Spark.command("die")
Command.setLevel(9)
Command.allowDms(true)
Command.setDescription('**Aliases**: none\n**Description**: Kills the bot\n**Arguments**: none\n**Example**: `!!die`')
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send(":ok_hand::skin-tone-4:  Killing the bot...")
        .then(() => {
            process.exit()
        })
  
}