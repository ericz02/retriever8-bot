const { loadFiles } = require("./FileLoader")
const { customClient } = require("../Classes/CustomClient")

/**
 * @param {customClient} client
 */
async function loadCommands(client) {

    const { commands, config, application, guilds } = client;
    
    let Loaded = 0
    let Failed = 0
    let CommandsArray = []

    const files = await loadFiles("Commands")

    files.forEach(file => {

        const command = require(file)
        if (!command.data.name) {
            return Failed++
        }
        
        commands.set(command.data.name, command)
        CommandsArray.push(command.data.toJSON())

        Loaded++

    })

    if (Loaded !== 0) {
        console.log(`Loaded ${Loaded} commands`)
    }

    if (Failed !== 0) {
        console.log(`Failed to load ${Failed} commands`)
    }

    if (config.global === true) {
        application.command.set(CommandsArray)
    } else {
        const guild = guilds.cache.get(config.devGuildId)
        if (!guild) return
        guild.commands.set(CommandsArray)
    }
}

module.exports = { loadCommands }