var Spark = require('sparkbots')
const Command = Spark.command('arthur')
Command.addAlias('playisgay')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('The best command')
Command.code = (client, message) => {

  message.channel.send('play is gay')

}
module.exports = Command;