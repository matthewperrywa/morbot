module.exports = {
    name: "quote",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const quotes = ["Dr. Michael Morbius: How far are we allowed to fix something that's broken?\nMentor: Until the remedy is worse than the disease.", "[speaking to a thug he's threatening]\nDr. Michael Morbius: I... am... Venom!\n[hisses at thug; then visibly brightens and smiles]\nDr. Michael Morbius: I'm just kidding! Dr. Michael Morbius, at your service.", "Martine Bancroft: You're up to something. What is it?\nDr. Michael Morbius: It's not exactly legal."];
        message.reply(quotes[Math.floor(Math.random() * 3)])
    }
}