
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
  };
                 
if(command === "ban") {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  
  let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
  
   let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
  
  await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

 if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(process.env.BOT_TOKEN);
