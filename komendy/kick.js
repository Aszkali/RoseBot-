module.exports = {
    name: 'kick',
    description: 'kickuje osoby',
    execute(message, args) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień do wysyłania wiadomości!");

        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('Użytkownik został wyrzucony z serwera.');
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz wyrzucić z serwera!!');
        }
    }
}