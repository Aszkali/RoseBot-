module.exports = {
    name: 'pomoc',
    description: 'lista komend',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#ff364e')
        .setTitle('🌹🌹 POMOC 🌹🌹')
        .addField("INFO O BOCIE:", "Cześć! Jestem Botem o nazwie RoseBot. Jestem botem 4FUN oraz Moderacyjnym")
        .addField("Mój prefix to r!", "- - - - - - - - - - -")
        .addField("KOMENDY:", "r!afk | r!beep | r!coinflip | r!howgay | r!invite | r!iqtest | r!kon | r!kostka | r!kot | r!masc | r!pies | r!ping |")
        .addField("KOMENDY ADMINISTRACYJNE:", "r!ankieta | r!ban | r!clear | r!embed | r!kick |")
        .addField("Data utworzenia bota: 21.07.2021", "JESTEM STWORZONY W JavaScript :o")
        .addField("WERSJA BOTA:", "1.2")
        .addField("STWORZYŁ BOTA:", "Aszkali#2137")
        .addField("LINK DO STRONY BOTA:", "jeszcze nie ma ale kiedyś będzie")
        .setFooter('Pozdrawiam 🌹');
 
        message.channel.send(newEmbed);
    }
}
