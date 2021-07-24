module.exports = {
    name: 'masc',
    description: 'masc na ból dupy',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
        
        .setColor('#ff364e')
        .setTitle('Jeśli Potrzebujesz to kliknij mnie!')
        .setURL('https://img20.dmty.pl//uploads/201407/1405092540_urgovw_600.jpg')
        .setDescription('Czasami może się przydać :)')

        message.channel.send(newEmbed);
    }
}
