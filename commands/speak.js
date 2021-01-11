
class speak {
    constructor() {

    }

    speak(msg, args) {
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
    
        //make cunt bot speak times the number you put in
        if (args[0]=='speak') {
            if (!args[1]) {return msg.channel.send("Gay cunt, gimme me some sentences")}
                    if (args[1]==parseInt(args[1])) {
                        if (!msg.member.roles.cache.some(r => r.name==="Admin")) {return msg.reply("You don't have permission to do that");}
                        if (args[1]>15) {return msg.channel.send("The message can't be that long because Tai is a gaysexual that exploited the speak command too fucking much");}
                        let textToSpeech=" ";
                        for (let i=0; i<args[1]; i++) {
                            textToSpeech+=" "+args[2];
                        }
                        return msg.channel.send(textToSpeech, {
                            tts:true
                        });
                    }
                    else {
                        return msg.channel.send(msg.content.slice(7), {
                            tts:true
                        });
                    }
        }
    }
}


module.exports= speak;