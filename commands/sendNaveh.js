class sendNaveh {
    constructor() {

    }

    navehIsSex(msg){
        const Discord=require('discord.js');
        const messageAttachment=Discord.MessageAttachment;
        const m=require('moment');
        const date=m().format('h a');
        
        const naveh1=new messageAttachment('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/Images/naveh1.png');
        const naveh2=new messageAttachment('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/Images/naveh2.png');
        const naveh3=new messageAttachment('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/Images/naveh3.png');

        console.log(date);
        //send naveh2 between 1 and 12 am
        if (1<=date[0]<=12 && date[2]+date[3]=="pm") {
            return msg.channel.send(naveh2);
        }
        //send naveh3 between 1 and 7 pm
        if (1<=date[0]<=7 && date[2]+date[3]=="pm") {
            return msg.channel.send(naveh3);
        }
        //send naveh1 between 8 and 12 pm and am
        if (8<=date[0]<=12 && date[2]+date[3]=="pm") {
            return msg.channel.send(naveh1);
        }
        else if (8<=date[0]<=12 && date[2]+date[3]=="am") {
            return msg.channel.send(naveh1);
        }
    }
}


module.exports= sendNaveh;