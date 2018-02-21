const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to this server.`).catch(console.error);
});

bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Overwatch");
  if(!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole).catch(console.error);
  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole).catch(console.error);
  }
});

if (command === "ping") {
    message.channel.sendMessage("pong!").catch(console.error);
  } else

if (command === "kick") {
    let modRole = message.guild.roles.find("name", "Mods");
    if(!message.member.roles.has(modRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
      return message.reply("That user does not seem valid");
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
    }).catch(console.error)
  }

client.on("message", message => {
  if (message.author.id === "292545042059624449") message.reply("You dun fucked up dawg");
});
                 
client.login(process.env.BOT_TOKEN);
