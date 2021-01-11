class commandManagment {
    constructor() {

    }
    
    //incase of a message
    //incase the message is a command search for the true function
    command(msg) {
        //const Discord=require('discord.js');
        //const cunt=new Discord.Client();
        const prefix='`';
        

        //function limiations
        if (!msg.content.startsWith(prefix)) {return;}
        if (msg.author.bot) {return;}

        
        //create the argument
        let args=msg.content.substring(prefix.length).split(' ');

        
        //import commands
        const help=require('../commands/help');
        const info=require('../commands/info');
        const mcstatus=require('../commands/mcStatus');
        const newidea=require('../commands/newIdea');
        const newleader=require('../commands/newLeader');
        const rank=require('../commands/rank');
        const speak=require('../commands/speak');
        const summon=require('../commands/summon');
        const rankLeaderboard=require('../commands/rankLeaderboard');
        const giveRank=require('../commands/giveRank');
        const testing=require('../commands/testing');
        

        //create imported classes variables
        const helpVar=new help();
        const infoVar=new info();
        const mcstatusVar= new mcstatus();
        const newideaVar=new newidea();
        const newleaderVar=new newleader();
        const rankVar=new rank();
        const speakVar=new speak();
        const summonVar=new summon();
        const rankLeaderboardVar= new rankLeaderboard();
        const giveRankVar= new giveRank();  
        const testingVar= new testing();
        

        //initiate
        helpVar.help(msg, args);
        infoVar.info(msg, args);
        mcstatusVar.minecraftServerStatus(msg, args);
        newideaVar.new_idea(msg, args);
        newleaderVar.new_supreme_leader(msg, args);
        rankVar.rank(msg, args);
        speakVar.speak(msg, args);
        summonVar.summon(msg, args);
        giveRankVar.giveRank(msg, args);
        rankLeaderboardVar.getRankLeaderboard(msg, args);
        testingVar.testing(msg, args);
    }
}


module.exports= commandManagment;
