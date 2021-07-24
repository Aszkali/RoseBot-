module.exports = {
    name: 'howgay',
    description: 'Komenda howgay!',
    async execute(message, args, Discord) {
        const member = message.mentions.users.first()
        const numberRandom = Math.floor(Math.random() * 100)
        if (!member) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle('Gej Test')
                .setDescription('Jesteś gejem w **'+numberRandom+'%**! 🏳️‍🌈')
                .setFooter(message.author.tag, message.author.avatarURL())
                .setColor('#ff364e')
                .setTimestamp()
            message.channel.send(newEmbed)
        }
        else if (member) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle('Gej Test')
                .setDescription('<@'+member.id+'> w **'+numberRandom+'%**! 🏳️‍🌈')
                .setFooter(message.author.tag, message.author.avatarURL())
                .setColor('#ff364e')
                .setTimestamp()
            message.channel.send(newEmbed)
        }
    }
}