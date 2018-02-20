
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#";

client.on("message", message => {
  if (message.author.id === "292545042059624449") message.reply("You dun fucked up boy");
});

if(command === "#kick") {
  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");

   let member = message.mentions.members.first();
   if(!member)
     return message.reply("Please mention a valid member of this server");
  if(!member.kickable)
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

  let reason = args.slice(1).join(' ');
   if(!reason)
      return message.reply("Please indicate a reason for the kick!");

  await member.kick(reason)
  .catch(error => message.reply('Sorry ${message.author} I couldn't kick because of : ${error}));
   message.reply(${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}');
                 
  });
                 
client.login(process.env.BOT_TOKEN);
