/*
    u3 Sentinel
    Main module and entry point

    Written in Node.js
    Author: utak3r
*/
console.log('u3Sentinel bot');

const config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

/*
    Collection of commands
*/
client.commands = new Discord.Collection();

const generalFuncs = require('./general.js');
client.commands.set('hello', generalFuncs.hello);
client.commands.set('server', generalFuncs.server);
client.commands.set('socials', generalFuncs.socials);

const moderatorFuncs = require('./moderator.js');
client.commands.set('kick', moderatorFuncs.kick);
client.commands.set('ban', moderatorFuncs.ban);


/*
    Discord callbacks
*/
client.on('ready', discordReady);
function discordReady()
{
    console.log('Discord client ready.');
}

client.on('guildMemberAdd', discordNewMember);
function discordNewMember(member)
{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (channel)
    {
        channel.send(`Witam na serwerze ${msg.guild.name}, ${member}!`);
    }
}

client.on('message', discordGotMessage);
function discordGotMessage(msg)
{
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try
    {
        client.commands.get(command)(msg, args);
    }
    catch (error)
    {
        console.error(error);
        msg.reply("Napotkałem błąd podczas wykonywania polecenia...")
    }

}

// ok, login and get to work!
client.login(config.token);
