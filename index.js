const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "414341347458416641") message.reply("All you had to do was follow the **damn** train");
});
                 
client.login(process.env.BOT_TOKEN);
