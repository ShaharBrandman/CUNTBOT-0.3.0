class info {
    constructor() {

    }

    info(msg, args) {
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
    
        //if you don't use info command right
        if (args[0]=="info" && !args[1]) {return msg.reply("NO");}
        if (args[0]+" "+args[1]=="info patch" && !args[2]) {return msg.reply("omfg... read. the. fucking. help. embed. ffs!");}
        //show cunt bot version
        if (args[0]+" "+args[1]+" "+args[2] == "info patch notes") {
            return msg.reply(new Discord.MessageEmbed()
                .setTitle("CUNT BOT PATCH NOTES")
                .addField("At 0.4.0", "Rescripted CUNT BOT & Removed many features like the FbiChannel, Custom Note & the two commands that I've never finished like getPic & getIP")
                .addField("At 0.3.0", "Added give rank command that allow users share server score with eachother")
                .addField("At 0.2.0", "Reworked the CUNT BOT Dev Script completly!, It is now 70% Faster then last version and fuck sake It took about two days, also added rank leaderboard")
                .addField("At 0.1.5", "Reworked the rank system Dev script")
                .addField("At 0.1.4.1", "Fixed a HUGH FUCKING BUG that reset everybody's rank and score, this version shouldn't even fucking exist")
                .addField("At 0.1.4", "Added Summon command that send private messages to the profile submitted")
                .addField("At 0.1.3", "Fixed my first bug when CUNT BOT would usually crash when the Supreme leader is online")
                .addField("At 0.1.2", "Limited so that CUNT BOT wouldn't reply to himself")
                .addField("At 0.1.1", "Added Server ranks, to view your rank use `rank <profile>")
                .addField("At 0.1.0", "Finally added spaces to the speak command! \nrescripted to `speak <amount> <message>")
                .addField("At 0.0.10", "Added Supreme leader ship conteders list command")
                .addField("At 0.0.9", "Added an Admin command that randomize a new Supreme leader")
                .addField("At 0.0.8", "Added limitions for the speak command and fuck that edit help command")
                .addField("At 0.0.7", "Created a JSON file for the help command which provide easy edits to the shown table")
                .addField("At 0.0.6", "Complete DEV Script rework, not intresting even tho it's faster at 20%")
                .addField("At 0.0.5", "Added `new server idea <idea>")
                .addField("At 0.0.4", "Added `speak <important sentence> <times the message>")
                .addField("At 0.0.3", "Added `new idea <cool idea>")
                .addField("At 0.0.2", "Added `mc status <IP>")
                .addField("At 0.0.1", "Added your mum, gay cunt nigger, yair rules")
                .addField("At 0.0.0", "I'M TRULY ALIVE MOTHERFUCKER")
            );
        }
    }
}

module.exports= info;