module.exports = {
    name: 'coinflip',
    description: 'rzut monetą',
    execute(message, args, Discord) {
        var coin = new Discord.MessageEmbed()
        .setTitle("CoinFlip")
        .setColor("#ff364e")
        .setTimestamp()
        var random = Math.floor(Math.random() * 19) + 1
        if (random == 1) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 2) {
            coin
            .setDescription('Reszka')
        }
        if (random == 3) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 4) {
            coin
            .setDescription('Reszka')
        }
        if (random == 5) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 6) {
            coin
            .setDescription('Reszka')
        }
        if (random == 7) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 8) {
            coin
            .setDescription('Reszka')
        }
        if (random == 9) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 10) {
            coin
            .setDescription('Reszka')
        }
        if (random == 11) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 12) {
            coin
            .setDescription('Reszka')
        }
        if (random == 13) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 14) {
            coin
            .setDescription('Reszka')
        }
        if (random == 15) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 16) {
            coin
            .setDescription('Reszka')
        }
        if (random == 18) {
            coin
            .setDescription('Orzeł')
        }
        if (random == 19) {
            coin
            .setDescription('Reszka')
        }
        message.channel.send(coin)
    }
}