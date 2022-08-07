module.exports = {
    name: "fact",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const facts = ["The film generated various memes that ironically praised it and caused it to trend numerous times. Sony saw what appeared to be renewed interest in the film and decided to re-release it in theaters on June 2, 2022. However the memes did not translate into box office success, as the film only made an average of $289 per theater, causing media outlets to report the film had bombed a second time.", "Jared Leto committed to capturing Michael Morbius' limping state and used crutches even off-camera. This proved to be troublesome for the crew, at times, when the actor reportedly took 45-minute treks to the bathroom. Pushing him in a wheelchair was a loophole solution around these delays.", "This is Jared Leto's third comic-book role, after playing the Joker in Suicide Squad (2016) and the Snyder Cut of Justice League."];
        message.reply(facts[Math.floor(Math.random() * 3)])
    }
}