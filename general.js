/*
    u3 Sentinel
    General commands
*/

function hello(msg, args)
{
    msg.reply(`Jestem i czekam na polecenia :)`);
}

function server(msg, args)
{
    msg.channel.send(`Nazwa serwera: ${msg.guild.name}\nOgółem użytkowników: ${msg.guild.memberCount}`);
}

module.exports = 
{
    hello,
    server
};
