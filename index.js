const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`);
})

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

client.login(process.env.TOKEN)