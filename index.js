const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "414341347458416641") message.reply("You dun fucked up fool");
});

client.on("message", message => {
  if (message.author.id === "414341347458416641") message.reply("You ugly as fuck fool");
});
                 
client.login(process.env.BOT_TOKEN);
