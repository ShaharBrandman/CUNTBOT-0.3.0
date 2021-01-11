class testing {
    constructor() {

    }


    testing(msg, args) {
        const Discord= require('discord.js');
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        const cunt=new Discord.Client();
        const prefix='`';
    
        cunt.rankSystem=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json');
        cunt.helpScript=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/helpScript.json');
        cunt.ideas=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/ideas.json');
        cunt.serverIdeas=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/serverIdeas.json');
        cunt.oldRanks=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/oldRanks.json');

    
        //testing
        if (args[0]=="testing") {
            if (msg.author!="287989507301703680") {return msg.channel.send("Only my Developer can use that command, and you'll never know what it does...");}
            

            return;
        }
    }
}

module.exports= testing;