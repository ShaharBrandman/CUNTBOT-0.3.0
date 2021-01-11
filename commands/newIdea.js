class newIdea {
    constructor() {

    }

    new_idea(msg, args) {
        const Discord= require('discord.js');
        const epico= require("fs");
        const cunt=new Discord.Client();
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const cheerio= require('cheerio');
        const rqst=require('request');
        const prefix='`';
        */
    
        cunt.ideas=require("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/ideas.json");
        cunt.serverIdeas=require("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/serverIdeas.json");
    
        //suggest a new idea for the bot
        if (args[0]+" "+args[1]=="new idea") {
            const moment= require('moment');
            const date=moment().format("Y, M, D, h:mm:ss");
            let writtenBotIdea;
            writtenBotIdea=msg.content.slice(10);
            //let message to not contain the prefix and the command in it
            cunt.ideas[msg.author.username+" at "+date]= {
                submission: writtenBotIdea
            };
            epico.writeFile("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/ideas.json", JSON.stringify(cunt.ideas, null, 4), err => {
                if (err) throw err;
                msg.reply(" Your epic new idea has been submitted");
            });
            return;
        }
    
        //suggest new idea for the whole server
        if (args[0]+" "+args[1]+" "+args[2]=="new server idea") {
            const moment=require('moment');
            const date=moment().format("Y, M, D, h:mm:ss");
            const newWrittenServerIdea=msg.content.slice(16);
            //let new written idea be without the prefix and the commands
            cunt.serverIdeas[msg.author.username+" At "+date] = {
                submission: newWrittenServerIdea
            };
    
            epico.writeFile("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/serverIdeas.json", JSON.stringify(cunt.serverIdeas, null, 4), error => {
                if (error) {throw error;}
                msg.reply("Your orgasmic new idea has been submitted" );
            });
            return;
        }
    
        //roast incase you didn't new idea right but in a super stupid way
        if ((args[0]=="new") && (!args[1])) {
            msg.channel.send("Are you an Arab? quit fucking that donkey and read it right cunt");
            msg.channel.send("use new idea <your msg> or new server idea <your msg>");
            return;
        }
    
        //roast incase you didn't write new idea right
        if (args[0]=="idea") {
            msg.channel.send("Are you an Arab? quit fucking that donkey and read it right cunt");
            msg.channel.send("use new idea <your msg> or new server idea <your msg>");
            return;
        }
    }
}


module.exports=newIdea;