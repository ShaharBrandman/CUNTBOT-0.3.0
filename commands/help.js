class help {
    constructor() {

    }

    help(msg, args) {
        const Discord= require('discord.js');
        const cunt=new Discord.Client();
        cunt.helpScript=require("../JSON Files/helpScript.json");
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        */
        //const prefix='`';
    
        //provide help with CUNT BOT's Commands
        if (args[0]=="help") {
            const cuntBotVersion=cunt.helpScript['CUNT-BOT'].cb;
            const cuntBotInfo=cunt.helpScript['INFO-COMMANDS'].if;
            const cuntButConversation=cunt.helpScript['Conversation-Commands'].cm;
            const cuntBotMinecraft=cunt.helpScript['MINECRAFT-COMMANDS'].mc;
            const cuntBotGet=cunt.helpScript['GET-COMMANDS'].get;
            const cuntBotGive=cunt.helpScript['give'].g;
            const cuntBotIdea=cunt.helpScript['new-Idea'].ni;
            const meinHelp= new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('CUNT BOT '+cuntBotVersion)
                    .setDescription('CUNT BOT Prefix: `')
                    .addField('INFO COMMANDS:', cuntBotInfo)
                    .addField('Conversation Commands', cuntButConversation)
                    .addField('MINECRAFT COMMANDS:', cuntBotMinecraft)
                    .addField('GET COMMANDS:', cuntBotGet)
                    .addField("Give commands: ", cuntBotGive)
                    .addField('Feel free to suggest me new Ideas at:', cuntBotIdea)
            return msg.reply(meinHelp);
        }
    }
}


module.exports= help;