class giveRank {
    constructor() {

    }

    //give somebody a score out of your score
    giveRank(msg, args) {
        const Discord=require('discord.js');
        const epico=require('fs');
        const cunt=new Discord.Client();

        cunt.rankSystem=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json');
        
        if (args[0]=="give" && !args[1]) {return msg.channel.send("One more word and you're banned for stupidty");}
        if (args[0]+" "+args[1]=="give rank") {
            if (!args[2]) {return msg.channel.send("You need to enter some sort of score dummy");}
            if (!args[3]) {return msg.channel.send("rly bro, enter a user for fuck sakes");}
            if (args[2]>1000) {return msg.channel.send("The maximum amount of score that can be given is 1000 per command");}
            if (args[2]==0) {return msg.channel.send("Do I even have to comment on that like... I feel like the problem is pretty clear not that I can feeling or anything");}
            //limitaion baby
            
            //get user stats
            let length=0;
            let userProfile;
            let userScore;
            let userRank;
            while (true) {
                try {
                    if (cunt.rankSystem[length].profile==msg.author.username) {
                        userProfile=cunt.rankSystem[length].profile;
                        userScore=cunt.rankSystem[length].score;
                        userRank=cunt.rankSystem[length].rank;
                        if (userScore<args[2]) {return msg.channel.send("Bitch you don't have that much score");}
                        break;
                    }
                }
                catch {
                    msg.reply("You can't be found cunt");
                    break;
                }

                length++;
            }

            //get other users rank
            let secondLength=0;
            let argsUserProfile;
            let argsUserScore;
            let argsUserRank;
            while (true) {
                try {
                    let motherfucker=(args[0]+" "+args[1]+" "+args[2]);
                    if (cunt.rankSystem[secondLength].profile==msg.content.slice(motherfucker.length+2)) {
                        argsUserProfile=cunt.rankSystem[secondLength].profile;
                        argsUserScore=cunt.rankSystem[secondLength].score;
                        argsUserRank=cunt.rankSystem[secondLength].rank;
                        if (userProfile==argsUserProfile) {return msg.channel.send("No, you can't share score with yourself");}
                        break;
                    }
                }
                catch {
                    return msg.reply("The User you specifiec is probably gay wasn't found");
                }

                secondLength++;
            }
            

            //rank up notification variablies
            const userOldRank=userRank;
            const argsOldRank=argsUserRank;

            //give the argsUser the score specified and lower msg.author's score
            args[2]=parseInt(args[2]);
            userScore=eval(userScore-args[2]);
            argsUserScore=eval(argsUserScore+args[2]);

            //change both their ranks to the right one after the transaction
            userRank=parseInt(userScore/100);
            argsUserRank=parseInt(argsUserRank/100);

            //notifty the new rank of argsUser and userRank
            if (userOldRank!=userRank) {
                msg.channel.send(userProfile+" has been deranked to rank "+userRank+" by gifting score, what a loser");
            }

            //write the msg.author new user
            cunt.rankSystem[length] = {
                profile: userProfile,
                score: userScore,
                rank: userRank
            };

            epico.writeFile("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json", JSON.stringify(cunt.rankSystem, null, 4), err => {
                if (err) throw err;
            });

            
            //write args[2] new user
            cunt.rankSystem[secondLength] = {
                profile: argsUserProfile,
                score: argsUserScore,
                rank: argsUserRank
            };

            epico.writeFile("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json", JSON.stringify(cunt.rankSystem, null, 4), err => {
                if (err) throw err;
            });

            return msg.channel.send(userProfile+" gave "+args[2]+" points of score to "+argsUserProfile);
        }
    }
}


module.exports= giveRank;