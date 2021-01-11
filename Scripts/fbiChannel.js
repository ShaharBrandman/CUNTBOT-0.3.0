/*
    Shahar Brandman (01/10/2020:10:45)
    This file is unused
*/
class fbiChannel {
    constructor() {

    }

    manageFbiChannel(member, cunt) {
        /*
        const messageAttachment= Discord.MessageAttachment;
        const ping= require('minecraft-server-util');
        const epico= require("fs");
        const cheerio= require('cheerio');
        const rqst=require('request');
        */
        //const prefix='`';
    

        cunt.helpScript=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/helpScript.json');
    
        
        //check if the supreme leader is online
        try {
            if (member.user.bot) {return;}
        }
        catch {
            console.log("AM A FUCKING ASSHOLE");
        }
        const leaderID=cunt.helpScript["Leader"].cLeaderID;
        try {
            if ((member.userID==leaderID) && (member.user.presence.status=='online')) {
                console.log("Leader ID is: "+leaderID);
                console.log("The Supreme Leader is online!");
                cunt.channels.cache.get('705477434719469570').send("@everyone Hail the Surpeme Leader "+member.user.username+"!");
            }
        }
        catch {
            console.log("Almost crashed");
        }
        //check if someone is online
        try {
            if (member.user.presence.status=='online') {
                cunt.channels.cache.get('709052367227846706').send(`${member.user.username} is ${member.user.presence.status}`);
            }
            else if (member.user.presence.status=='offline') {
                cunt.channels.cache.get('709052367227846706').send(`${member.user.username} is ${member.user.presence.status}`);
            }
            else if (member.user.presence.status=='idle') {
                cunt.channels.cache.get('709052367227846706').send(`${member.user.username} is ${member.user.presence.status}`);
            }
            else if (member.user.presence.status=='dnd') {
                cunt.channels.cache.get('709052367227846706').send(`${member.user.username} is on do not disturb`);
            }
        }
        catch {
            console.log("Almost crash by a user");
            console.error();
        }
    };
    
}


module.exports= fbiChannel;