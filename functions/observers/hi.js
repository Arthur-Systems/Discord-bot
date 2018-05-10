var Spark = require("sparkbots")
const Observer = Spark.observer("mention")
Observer.code = (client, message) => {

  if(message.author.bot)
  return

  if(message.content==='hi')
  return message.reply("Hi")

}

module.exports = Observer