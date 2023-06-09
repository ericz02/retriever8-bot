const { GatewayIntentBits, Partials, } = require("discord.js")
const { CustomClient } = require("./Classes/CustomClient")
const { loadEvents } = require("./Functions/EventLoader")
require("dotenv").config()

const client = new CustomClient({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ],
    Partials: [
        Partials.Channel,
        Partials.Message,
        Partials.Reaction,
    ]
})

loadEvents(client)

client.login(process.env.TOKEN)