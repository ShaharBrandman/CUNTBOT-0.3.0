const { Console } = require('console');

class rankManagment {
    constructor() {

    }

    rankSystem(msg) {
        const Discord= require('discord.js');
        const cunt=new Discord.Client();
        const epico= require("fs");
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const cheerio= require('cheerio');
        const rqst=require('request');
        //const prefix='`';
        */
        
        cunt.rankSystem=require('../JSON Files/rankSystem.json');
        //discord bot rank system
        
        if (msg.author.bot) {return;}
        if (!msg.content) {return;}
        //limitation
        let oldUserRank;
        let userProfile;
        let userScore;
        let userRank;
        let i=0;
        //create variables
        
        //require user stats
        while (true) {
            try {
                //if the profile equals the author continue
                //let userProfile=cunt.rankSystem[i].profile;
                if (userProfile==msg.author.username) {
                    oldUserRank=cunt.rankSystem[i].rank;
                    break;
                }
            }
            catch {
                //if the profile doesn't exist create a new one
                cunt.rankSystem[i]= {
                    profile: msg.author.username,
                    score: 0,
                    rank: 0
                };
                epico.writeFile('../JSON Files/rankSystem.json', JSON.stringify(cunt.rankSystem, null, 4), err => {
                    if (err) throw err;
                });
                break;
            }
        
            //end of the loop
            i++;
        }
        
        //new score for the user
        userProfile=cunt.rankSystem[i].profile;
        userScore=cunt.rankSystem[i].score;
        userRank=cunt.rankSystem[i].rank;
        //organize user variables
        //score the new user score
        userScore+=1;
        userRank=parseInt(userScore/100);
        //if the user rank up alert the user and rank him up
        if (userRank==0) {
            Console.log("NEW USERS?");
        }
        else if (userRank!=oldUserRank) {
            msg.channel.send("Congrats "+msg.author.username+" You have been Ranked up to Rank "+userRank);
        }
        //write the new user score
        cunt.rankSystem[i] = {
            profile: userProfile,
            score: userScore,
            rank: userRank
        };
        epico.writeFile('../JSON Files/rankSystem.json', JSON.stringify(cunt.rankSystem, null, 4), err => {
            if (err) throw err;
        });
        //end of the function
        return;
    }
}


module.exports= rankManagment;