class mcStatus {
    constructor() {

    }

    minecraftServerStatus(msg, args) {
        const Discord= require('discord.js');
        const ping= require('minecraft-server-util');
        /*
        const messageAttachment= Discord.MessageAttachment;
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        const cunt=new Discord.Client();
        const prefix='`';
        */
    
        //get minecraft servers status
        if ((args[0]+" "+args[1])=="mc status") {
            if (!args[2]) {return msg.channel.send("Bruh you need to provide an IP Address");}
            ping(args[2], 25565, (error, reponse) => {
                if (error) {
                    msg.channel.send("Invalid IP");
                    throw error;
                }
                //create server status table
                const status= new Discord.MessageEmbed()
                    .setTitle('Server Status:')
                    .addField('Server IP:', reponse.host)
                    .addField('Server Version:', reponse.version)
                    .addField('Online Players:', reponse.onlinePlayers)
                    .addField('Max Players:', reponse.maxPlayers)
                return msg.channel.send(status);
            });
        }
    }
}


module.exports= mcStatus;