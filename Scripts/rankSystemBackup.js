class rankSystemBackup {
    constructor() {

    }

    backup() {
        const Discord=require('discord.js');
        const epico= require("fs");
        const cunt=new Discord.Client();
        cunt.rankSystem=require('../JSON Files/rankSystem.json');
        cunt.oldRanks=require('../JSON Files/oldRanks.json');
        //import shit    

        //run loop through the amount of users in the rankSystem file
        //and backup everything times the amount of Users
        let length=0;
        while (true) {
            try {
                const rankSystemProfile=cunt.rankSystem[length].profile;
                const rankSystemScore=cunt.rankSystem[length].score;
                const rankSystemRank=cunt.rankSystem[length].rank;
                //get user stats from rankSystem.json

                //write it all in the oldRanks.json for back
                //write backup
                cunt.oldRanks[length] = {
                    profile:rankSystemProfile,
                    score:rankSystemScore,
                    rank: rankSystemRank
                };

                epico.writeFile('../JSON Files/oldRanks.json', JSON.stringify(cunt.oldRanks, null, 4), error => {
                    if (error) {throw error;}
                });

            }
            catch {
                break;
            }

            length++;
        }

        return console.log("Rank System has been back up");
    }

} 


module.exports=rankSystemBackup;