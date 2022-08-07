const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "morb.",
    owners: ["853006579459424256"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

const guildId = "853006579459424256"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("ready", async () => {
    const guild = client.guild.cache.get(guildId)
    if (!guild)
        console.error("Target guild not found")

        await guild.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size}`)
        process.exit(0)
})

client.login(process.env.TOKEN)