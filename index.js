const Discord = require("discord.js");
const client = new Discord.Client();

bot.on("message". function(message) {
       if (message.author.equals(bot.user)) return;

       if (message.content == "hello") {
         message.channel.sendmessage("Hi, There");
       }
});

client.on("message", message => {
  if (message.author.id === "414341347458416641") message.reply("You dun fucked up fool");
});
                 
client.login(process.env.BOT_TOKEN);
