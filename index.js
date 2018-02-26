const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("Like it says in the book... We are both **blessed** and **cursed**.");
});

client.on("message", message => {
  if (message.author.id === "416405151050366976") message.reply("Awww, **motherfucker**, my car!");
});

client.on("message", message => {
  if (message.author.id === "416418286184431636") message.reply("You picked the wrong house, **fool!**");
});

client.on("message", message => {
  if (message.author.id === "417500499424706560") message.reply("**Oh shit**, the brakes is out!");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "what's ya order?") {
    msg.reply("I'll have 2 number nines, a number nine large, a number six with extra dip, a number seven, 2 number 45's, one with cheese and a large soda.");
  }
});

client.login(process.env.BOT_TOKEN);
