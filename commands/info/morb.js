module.exports = {
    name: "morb",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let morbs = Math.floor(Math.random() * 100) + 1
        let morbReply = "";
        morbReply = "I'm going to morb " + morbs + " times.\n\n"
        for(let i = 0; i < morbs; i++){
            morbReply = morbReply + "It's Morbin time.\n"
        }
        message.reply(morbReply)
    }
}