var Spark = require("sparkbots")
const Command = Spark.command("say")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Repeats what you say ') 
Command.code = (client, message) => {
  
if(message.author.bot) return message.channel.send("Sorry but Bots can/'t use commands");

  message.delete();
  message.channel.send((message.author.username) + " says: " + (message.content.replace('$say ','')));

}
module.exports = Command;