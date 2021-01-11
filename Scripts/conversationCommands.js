class conversationCommands {
    constructor() {

    }

    interupt(msg) {
        const Discord= require('discord.js');
        const cunt=new Discord.Client();


        if (msg.content.startsWith('`')) {return;}
        if (msg.author.bot) {return;}


        //normal interuptions
        if (msg.content.toLowerCase().includes("wake up motherfucker")) {return msg.channel.send("I'M ALIVE MOTHERFUCKER");}

        if (msg.content.toLowerCase().includes("ur mom") || msg.content.toLowerCase().includes("your mom"))
        {return msg.channel.send("is fat");}

        if (msg.content.toLowerCase().includes("fuck you") || msg.content.toLowerCase().includes("fuck u")) {
            return msg.channel.send("You make me techinally brain damaged");
        }
        if (msg.content.toLowerCase().includes("kill all the jews")) {return msg.channel.send("Hail Hitler");}

        if (msg.content.toLowerCase().includes("תהרוגנה את כל היהודים")) {
            cunt.helpScript=require('../JSON Files/helpScript.json');
            const surpemeLeader=cunt.helpScript["Leader"].cLeader;
            return msg.channel.send("Ask "+surpemeLeader+" for that");
        }

        if (msg.content.toLowerCase().includes("cunt")) {
            return msg.channel.send("That's my name");
        }

        if (msg.content[0]=="!") {
            msg.channel.send("Notice me... :heart:");
        }


        //reply interuptions
        if ((msg.content.toLowerCase().includes("nigga")) || (msg.content.toLowerCase().includes("nigger"))
        || (msg.content.toLowerCase().includes("negro"))) {
            return msg.reply("You don't have permission to say the N-WORD!!");
        }


        //function interuptions
        if (msg.content.toLowerCase().includes("is it time?")) {
            msg.reply("it is!");
            const sendNaveh=require('../commands/sendNaveh');
            const sendNavehVar=new sendNaveh();
            sendNavehVar.navehIsSex(msg);
            return;
        }

    }
}


module.exports= conversationCommands;