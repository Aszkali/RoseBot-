module.exports = {
    name: 'afk',
    description: 'czy bot jest afk',
    execute(message, args) {
        message.channel.send('Nie śpię spokojnie!');
    },
};