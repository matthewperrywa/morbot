module.exports = {
    name: "hello",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Hello. I am Dr. Michael Morbius. I graduated from Harvard Medical School in 2001 and in 2019 I won a Nobel Prize for my achievements in the medical field.")
    }
}