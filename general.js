/*
    u3 Sentinel
    General commands
*/

const config = require('./config.json');

function hello(msg, args)
{
    msg.reply(`Jestem i czekam na polecenia :)`);
}

function server(msg, args)
{
    var info = `Nazwa serwera: ${msg.guild.name}\n`;
    if (msg.guild.description)
        info += `Opis: ${msg.guild.description}\n`;
    info += `Ogółem użytkowników: ${msg.guild.memberCount}`;
    msg.channel.send(info);
}

function socials(msg, args)
{
    var info = `utak3rowe sociale:\n`;
    info += `Facebook: ${config.facebook}\n`;
    info += `Instagram: ${config.instagram}\n`;
    info += `Twitter: ${config.twitter}`;
    msg.channel.send(info);
}

module.exports = 
{
    hello,
    server,
    socials
};
