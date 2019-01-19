const Discord = require('discord.js');

const client =new Discord.Client();

var prefix = "+";

client.login("NTMwNDkxNjQwNDQ4ODExMDE4.DxAKdA.QQc9BisgMUXcQRzAZ5-Yw_k_LLg");

client.on("ready", () => {
   console.log("Je suis prêt !")
   client.user.setGame("Administrer");
});

client.on('message', message => {
    if(message.content ==="Bonjour"){
        message.reply("Salut");
        console.log('Le Bot  A Dit Bonjour');
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0000FF")
        .setTitle("Voici mes commande d'aide :D !")
        .setDescription("Voici toute mes commande qui sont actifs !")
        .addField("+aide", "A afficher les commande du bot")
        .addField("Bonjour", "Le Bot Répond !")
        .addField("bonjour", "Le Bot Répond !")
        .addField("+statistiques", "Le Bot Vous Envoie Vos Statistiques En Message Privée !")
        .addField("+info", "Le Bot Vous Donne Des Information Sur Lui Et Sur Le Discord ")
        .setFooter("Menu d'aide - Test !")
        message.channel.sendMessage(help_embed)
        console.log("Un utilisateur a éffectuer la commande d'aide !")
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "statistiques":
      
      var userCreateDate = message.author.createdAt.toString().split(" ");
      var msgauthor = message.author.id;

      var stats_embed = new Discord.RichEmbed()

      .setColor("#0000FF")
      .setTitle(`Statistique de l'utilisateur : ${message.author.username}`)
      .addField(`ID de l'utilisateur :id:`, msgauthor, true)
      .addField("Date de création de l'utilisateur :", userCreateDate[1]+ ' ' + userCreateDate[2]+ ' ' + userCreateDate[3])
      .setThumbnail(message.author.avatarURL)
      message.reply("Va voir tes message privés tu a ressus tes stats !")
      message.author.send({embed: stats_embed});
      break;
      
    }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#0000FF")
        .setTitle("Voici des information sur le serveur et moi !")
        .addField(" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salon", message.guild.channels.size)
        .setFooter("Info - Vullar")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectuer la commande d'info !")
    }
});

client.on('message', message => {
    if(message.content ==="bonjour"){
        message.reply("Salut");
        console.log('Le Bot A Dit Bonjour');
    }
});

client.on("ready", () => {
    console.log("Les commande sont prête !")
    client.user.setGame("Administrer");
});

client.on("ready", () => {
    console.log("Les message sont prêt a être envoyer !")
    client.user.setGame("Administrer");
});
