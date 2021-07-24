module.exports = {
    name: 'kostka',
    description: 'losowy numer od 1 do 6',
    execute(message, args, Discord) {
        var kostka = new Discord.MessageEmbed()
        .setTitle("KOSTKA WYLOSOWAŁA:")
        .setColor("#ff364e")
        .setTimestamp()
        var random2 = Math.floor(Math.random() * 6) + 1
    if (random2 == 1){
        kostka
        .addField("1", "🌹")
    }
    if (random2 == 2){
        kostka
        .addField("2", "🌹")
    }
    if (random2 == 3){
        kostka
        .addField("3", "🌹")
    }
    if (random2 == 4){
        kostka
        .addField("4", "🌹")
    }
    if (random2 == 5){
        kostka
        .addField("5", "🌹")
    }
    if (random2 == 6){
        kostka
        .addField("6", "🌹")
    }
     message.channel.send(kostka)
    }
}