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

/*

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
        message.reply("I am Dr. Michael Morbius.")
    }
    else if(message.content == "morb"){
        message.reply("https://cdn.discordapp.com/attachments/935989994735169546/988187107300352070/full-1.webm")
    }
    else if(message.content == "banana"){
        message.reply("It's Minions time.")
    }
    else if(message.content != "It's Morbin time." &&
            message.content != "I am Dr. Michael Morbius." &&
            message.content != "https://cdn.discordapp.com/attachments/935989994735169546/988187107300352070/full-1.webm" &&
            message.content != "It's Minions time."){
        message.reply("It's Morbin time.")
    }
})

const welcomeChannelId = "1002068438715482224"

client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> morbed into the server`)
})

*/

/*
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`);
})
*/

client.slashcommands = new Discord.Collection()
client.buttons = new Discord.Collection()


client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)
client.loadButtons(bot, false)


client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perms && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply("You do not have permission for this command")

    slashcmd.run(client, interaction)
})

client.login(process.env.TOKEN)