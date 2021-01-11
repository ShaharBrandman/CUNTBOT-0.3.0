
class rank {
    constructor() {

    }

    rank(msg, args) {
        const Discord= require('discord.js');
        const cunt=new Discord.Client();
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        const prefix='`';
        */
    
        cunt.helpScript=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/helpScript.json');
        cunt.rankSystem=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json');
    
        //get ur rank or somebody elses
        if (args[0]=="rank") {
            //get cunt bot rank
            if (msg.content.slice(6).toLowerCase()=="cunt bot") {
                const a=cunt.helpScript["Leader"].cLeader;
                const viewRank= new Discord.MessageEmbed()
                    .setAuthor(a)
                    .setTitle("CUNT BOT's RANK")
                    .addField("SCORE:", "??????????")
                    .addField("SERVER RANK:", cunt.helpScript["CUNT-BOT"].cb)
                return msg.channel.send(viewRank);
            }
            //get somebody rank
            if (args[1]) {
                //cunt.rankSystem=require('./rankSystem.json');
                let userProfile;
                let userScore;
                let userRank;
                let i=0;
                while (true) {
                    try {
                        //find the user you want
                        userProfile=cunt.rankSystem[i].profile
                        if (userProfile==msg.content.slice(6)) {
                            break;
                        }
                    }
                    catch {
                        //if the user doesn't exist return invalid profile
                        const invalidProfile= new Discord.MessageEmbed()
                            .setColor('#2ecc71')
                            .setAuthor("CUNT BOT")
                            .setTitle(msg.content.slice(6)+"'s RANK")
                            .addField("SCORE:", "?????")
                            .addField("RANK:", "????")
                        return msg.channel.send(invalidProfile);
                    }
    
                    i++;
                }
    
                //organize the user variables
                userProfile=cunt.rankSystem[i].profile;
                userScore=cunt.rankSystem[i].score;
                userRank=parseInt(userScore/100);
    
                //return the wanted profile
                const userStats= new Discord.MessageEmbed()
                    .setColor('#2ecc71')
                    .setAuthor("CUNT BOT")
                    .setTitle(userProfile+"'s RANK")
                    .addField("SCORE:", userScore)
                    .addField("RANK:", userRank)
                return msg.channel.send(userStats);
            }
            //get ur rank
            else {
                cunt.rankSystem=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json');
                let userProfile;
                let userScore;
                let userRank;
                let i=0;
                while (true) {
                    try {
                        if (cunt.rankSystem[i].profile==msg.author.username) {
                            break;
                        }
                    }
                    catch {
                        const invalidProfile= new Discord.MessageEmbed()
                        .setColor('#2ecc71')
                        .setAuthor("CUNT BOT")
                        .setTitle(userProfile+"'s RANK")
                        .addField("SCORE:", "0")
                        .addField("RANK:", "0")
                        return msg.channel.send(invalidProfile);
                    }
                    
                    i++;
                }
    
                //organize the user variables
                userProfile=cunt.rankSystem[i].profile;
                userScore=cunt.rankSystem[i].score;
                userRank=parseInt(userScore/100);
    
                //return the wanted profile
                const userStats= new Discord.MessageEmbed()
                    .setColor('#2ecc71')
                    .setAuthor("CUNT BOT")
                    .setTitle(userProfile+"'s RANK")
                    .addField("SCORE:", userScore)
                    .addField("RANK:", userRank)
                return msg.channel.send(userStats);
            }
        }
    }
}


module.exports= rank;