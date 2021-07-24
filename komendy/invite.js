module.exports = {
    name: 'invite',
    description: 'zaproś bota na własny serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#ff364e')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/oauth2/authorize?client_id=747510406884491365&scope=bot&permissions=805314622')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter('Z góry dzięki!');
 
        message.channel.send(newEmbed);
    }
}
