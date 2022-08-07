module.exports = {
    name: "banana",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("It's Minions time.")
    }
}