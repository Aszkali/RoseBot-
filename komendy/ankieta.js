module.exports = {
    name: 'ankieta',
    description: 'zrób ankietę!',
    async execute(message, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień do wysyłania wiadomości!");

        message.delete()
        let Arguments = args.join(' ');
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#ff364e')
        .setTitle('Nowa Ankieta!')
        .setDescription(`Ankieta: ${Arguments}`)
        .setFooter('Użyj reakcji, aby zagłosować.')

        let MessageEmbed = await message.channel.send(newEmbed)

        MessageEmbed.react('👍');
        MessageEmbed.react('👎');
    }
}