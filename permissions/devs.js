var Spark = require("sparkbots")
const Permission = Spark.permission("Dev")
Permission.setLevel(9)
module.exports = Permission;

Permission.code = (client, message) => {
    let devs = ['190916650143318016', '329399494284410883']
    if(!devs.includes(message.author.id)){
      return true
    } else {
    return false
    }
}