module.exports = {
    name: 'iqtest',
    description: 'Komenda iqtest!',
    async execute(message, args, Discord) {
        const member = message.mentions.users.first()
        const numberRandom = Math.floor(Math.random() * 200)
        if (!member) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle('Iq Test')
                .setDescription('Twoje Iq wynosi: **'+numberRandom+'**!')
                .setFooter(message.author.tag, message.author.avatarURL())
                .setColor('#ff364e')
                .setTimestamp()
            message.channel.send(newEmbed)
        }
        else if (member) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle('Iq Test')
                .setDescription('<@'+member.id+'> ma **'+numberRandom+'** Iq!')
                .setFooter(message.author.tag, message.author.avatarURL())
                .setColor('#ff364e')
                .setTimestamp()
            message.channel.send(newEmbed)
        }
    }
}