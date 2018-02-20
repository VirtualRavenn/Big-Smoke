
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#";

client.on("message", message => {
  if (message.author.id === "292545042059624449") message.reply("You dun fucked up dawg");
});
                 
client.login(process.env.BOT_TOKEN);
