/*
    u3 Sentinel
    Moderator commands
*/

function kick(msg, args)
{
    if (msg.author.username == 'utak3r')
    {
        if (msg.guild)
        {
            var user = msg.mentions.users.first();
            if (user)
            {
                var member = msg.guild.member(user);
                if (member)
                {
                    member
                        .kick('Użytkownik wykopany!')
                        .then(() => {
                            msg.reply(`Użytkownik ${user.tag} wykopany.`);
                        })
                        .catch(err => {
                            msg.reply('Nie mogłem wykopać użytkownika.');
                            console.error(err);
                        });
                }
                else
                {
                    msg.reply("Tego użytkownika nie ma na tym serwerze!");
                }
            }
            else
            {
                msg.reply("Nie podałeś, kogo wykopać!");
            }
        }
        else
        {
            msg.reply('Ta komenda musi być wydana na tym samym serwerze!');
        }
    }
    else
    {
        msg.reply('Nie masz uprawnień do wykopywania użytkowników!');
    }
}

function ban(msg, args)
{
    if (msg.author.username == 'utak3r')
    {
        if (msg.guild)
        {
            var user = msg.mentions.users.first();
            if (user)
            {
                var member = msg.guild.member(user);
                if (member)
                {
                    member
                        .ban({
                            reason: 'Użytkownik zbanowany!',
                        })
                        .then(() => {
                            msg.reply(`Użytkownik ${user.tag} zbanowany.`);
                        })
                        .catch(err => {
                            msg.reply('Nie mogłem zbanować użytkownika.');
                            console.error(err);
                        });            
                }
                else
                {
                    msg.reply("Tego użytkownika nie ma na tym serwerze!");
                }
            }
            else
            {
                msg.reply("Nie podałeś, kogo zbanować!");
            }
        }
        else
        {
            msg.reply('Ta komenda musi być wydana na tym samym serwerze!');
        }
    }
    else
    {
        msg.reply('Nie masz uprawnień do banowania użytkowników!');
    }
}

module.exports = 
{
    kick,
    ban
};
