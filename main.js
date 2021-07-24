const Discord = require('discord.js');
const nodemon = require('nodemon');
const client = new Discord.Client
const prefix = 'r!';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));


client.once('ready', () => {
    console.log('Szef jest aktywny');
    client.user.setActivity('Twoich Potrzeb 🌹', {type: 'LISTENING'})
});



for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'beep') {
        client.commands.get('beep').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } 
    else if (command === 'afk') {
        client.commands.get('afk').execute(message, args);
    }
      else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord);
    }
     else if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    else if (command === 'embed') {
        client.commands.get('embed').execute(message, args, Discord);
    }
    else if (command === 'kon') {
        client.commands.get('kon').execute(message, args);
    }
    else if (command === 'masc') {
        client.commands.get('masc').execute(message, args, Discord);
    }
    else if (command === 'pomoc') {
        client.commands.get('pomoc').execute(message, args, Discord);
    }
    else if (command === 'howgay') {
        client.commands.get('howgay').execute(message, args, Discord);
    }
    else if(command === 'iqtest') {
        client.commands.get('iqtest').execute(message, args, Discord);
    }
    else if(command === 'pies') {
        client.commands.get('pies').execute(message, args, Discord);
    }
    else if(command === 'kot') {
        client.commands.get('kot').execute(message, args, Discord);
    }
    else if(command === 'kostka') {
        client.commands.get('kostka').execute(message, args, Discord);
    }
    else if(command === 'coinflip') {
        client.commands.get('coinflip').execute(message, args, Discord);
    }
});


client.login('NzQ3NTEwNDA2ODg0NDkxMzY1.X0P7UQ._-oA10mYroK8POooOFOu0cKoDlU');