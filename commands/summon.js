
class summon {
    constructor() {

    }

    summon(msg, args) {
        const Discord= require('discord.js');
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        const cunt=new Discord.Client();
        const prefix='`';
        */
    
        //summon the motherfucker
        if (args[0]=="summon") {
            if (args[0]+" "+args[1].toLowerCase()=="summon cunt bot") {return msg.channel.send("FUCK U");}
            let mention = msg.mentions.users.first();
            if (!args[1]) {return msg.channel.send("You're a whiny Homo do you know that?, `summon <somebody>");}
            let mentionMSG=msg.content.slice(8);
            try {
                for (let i=1; i<=5; i++) {
                    mention.send("YOU ARE BEING SUMMONED BY "+msg.author.username.toUpperCase()+"!");
                }
            }
            catch {
                return msg.channel.send("You need to mention somebody cunt");
            }
            return msg.channel.send(mentionMSG+" IS BEING SUMMONED");
    
        }
    
    }
}


module.exports= summon;