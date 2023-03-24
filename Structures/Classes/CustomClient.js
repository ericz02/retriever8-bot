const { Client, Colors, Collection } = require("discord.js")
const configuration = require("../../config.json")


class CustomClient extends Client {

    color = Colors.Blue
    config = configuration
    commands = new Collection()
    
}

module.exports = { CustomClient }