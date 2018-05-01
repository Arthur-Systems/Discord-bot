const Spark = require("sparkbots")
Spark.start({
prefix: "~",
token: process.env.TOKEN,
ignoreUpdate: ["0.1.0-beta.0"]})

var ClientInjRe = require('./express.js')