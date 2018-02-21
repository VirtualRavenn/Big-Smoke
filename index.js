const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("**Fool** you aren't suppose to be in here.");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "what's ya order?") {
    msg.reply("I'll have 2 number nines, a number nine large, a number six with extra dip, a number seven, 2 number 45's, one with cheese and a large soda.");
  }
});

client.login(process.env.BOT_TOKEN);
