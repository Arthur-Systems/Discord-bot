var Spark = require("sparkbots")
const Command = Spark.command("say")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('._.')

Command.code = (client, message) => {
  if (message.content === "///" )
  message.delete() return
  else
  message.delete()
  message.channel.send((message.author.username) + " says: " + (message.content.replace('$say ','')));
  
}

module.exports = Command;