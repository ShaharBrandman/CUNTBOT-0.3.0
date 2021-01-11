class rankLeaderboard {
    constructor() {

    }

    getRankLeaderboard(msg, args) {
        const Discord=require('discord.js');
        const cunt= new Discord.Client();
        cunt.rankSystem=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/rankSystem.json');
        //no need for explaination
        
        if (args[0]+" "+args[1]+" "+args[2]=="get rank leaderboard") {
            let length=0;
            //get the amount of users
            while (true) {
                try {
                    const fu=cunt.rankSystem[length].profile;
                    length++;
                }
                catch {
                    break;
                }
            }

            //get them all in a leaderboard array
            var leaderboardScore = new Array(length);

            for (let i=0; i<leaderboardScore.length; i++) {
                leaderboardScore[i]=cunt.rankSystem[i].score;
            }

            

            //sort the leaderboard
            leaderboardScore.sort(function(a, b){return b - a});
            
            //check whose value is the leaderboard index
            let leaderboardProfile=new Array(length);
            let leaderboardRank= new Array(length);

            for (let i=0; i<leaderboardProfile.length; i++) {
                for (let j=0; j<leaderboardProfile.length; j++) {
                    if (cunt.rankSystem[j].score==leaderboardScore[i]) {
                        leaderboardProfile[i]=cunt.rankSystem[j].profile;
                        leaderboardRank[i]=cunt.rankSystem[j].rank;
                    }
                }
            }

            const leaderboardEmbed= new Discord.MessageEmbed()
                .setTitle("Ranks Leaderboard")
                .setColor('#f9ca24')

            for (let i=0; i<5; i++) {
                if (i==0) {
                    leaderboardEmbed
                    .addField((i+1)+"st place", leaderboardProfile[i])
                }
                if (i==1) {
                    leaderboardEmbed
                    .addField((i+1)+"nd place", leaderboardProfile[i])
                }
                if (i==2) {
                    leaderboardEmbed
                    .addField((i+1)+"rd place", leaderboardProfile[i])
                }
                else if (i>=3){
                    leaderboardEmbed
                    .addField((i+1)+"th place", leaderboardProfile[i])
                }
            }
            /*
            console.log(leaderboardProfile);
            console.log(leaderboard);
            console.log(leaderboardRank);
            */

            return msg.channel.send(leaderboardEmbed);
        }
    }
}


module.exports= rankLeaderboard;