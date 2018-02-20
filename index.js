
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "292545042059624449") message.reply("You dun fucked up boy");
});

client.login(process.env.BOT_TOKEN);
