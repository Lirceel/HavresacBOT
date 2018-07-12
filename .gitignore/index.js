const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log('le bot a bien été conecté !');
});

/*client.on("message", message => { 
    if (.... ce que tu veux) {
        encore ce que tu veux
}
})*/

client.login( process.env.TOKEN_BOT )
client.on("error", error => {
  console.log(error)
})
client.on('message', message => {
  if (message.content === '!!ping') {
    message.reply('Pong!');
  }
  if (message.content === '!!help') {
    message.channel.send({embed: {
      color: 16752384,
      title: "__Voici la liste des commandes que je peux executer et leur description :__",
      description: "",
      fields: [{
          name: "!!inv",
          value: "Montre l'inventaire de la personne qui fait la commande."
        },
      
      {
        name: "!!inv @pseudo",
        value: "Montre l'inventaire de @pseudo."
      },
      {
        name: "!!inv-add objet",
        value: "Ajoute un objet dans l'inventaire de la personne qui fait la commande."
      
      },
      {
        name: "!!inv-remove 1,2,3...",
        value: "Retire l'objet correspondant au numero dans l'inventaire de la personne qui fait la commande."
      
      },
      {
        name: "__Commandes reservées au staff :__",
        value: "** **"
      
      },
      {
        name: "!!inv-add @pseudo objet",
        value: "Ajoute un objet dans l'inventaire de la personne qui fait la commande."
      
      },
      {
        name: "!!inv-remove @pseudo 1,2,3...",
        value: "Retire l'objet correspondant au numero dans l'inventaire de @pseudo."
      
      },
                  
    ]},
    });
  }

})  
