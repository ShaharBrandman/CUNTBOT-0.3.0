class newLeader {
    constructor() {

    }

    new_supreme_leader(msg, args) {
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
    
        cunt.helpScript=require('/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/helpScript.json');
    
        //randomize a random supreme leader
        if ((args[0]+" "+args[1]+" "+args[2])=="new supreme leader") {
            if (!msg.member.roles.cache.some(r => r.name==="Admin")) {return msg.channel.send("Fuck off this is a Admin only command");}
            let num=parseInt(Math.random()*12+1);
            let supremeLeader;
            let supremeLeaderID;
            switch (num) {
                case 1:
                    //let leader=message.guild.roles.get("489798503082754060");
                    supremeLeader="Matan";
                    supremeLeaderID="489798503082754060";
                    break;
                case 2:
                    supremeLeader="Noam";
                    supremeLeaderID="427072487357022208";
                    break;
                case 3:
                    supremeLeader="Naveh";
                    supremeLeaderID="296238130099519488";
                    break;
                case 4:
                    supremeLeader="Tai";
                    supremeLeaderID="294359783417577472";
                    break;
                case 5:
                    supremeLeader="Aluma";
                    supremeLeaderID="466964346015055902";
                    break;
                case 6:
                    supremeLeader="Shahar";
                    supremeLeaderID="287989507301703680";
                    break;
                case 7:
                    supremeLeader="Ellay";
                    supremeLeaderID="218336458036084736";
                    break;
                case 8:
                    supremeLeader="Afik";
                    supremeLeaderID="455417316579213333";
                    break;
                case 9:
                    supremeLeader="Elaya";
                    supremeLeaderID="226268403923550208";
                    break;
                case 10:
                    supremeLeader="Ariel";
                    supremeLeaderID="473208908698222602";
                    break;
                case 11:
                    supremeLeader="Yair";
                    supremeLeaderID="287991413868593174";
                    break;
                case 12:
                    supremeLeader="Lio";
                    supremeLeaderID="627878237015638016";
                    break;
            }
            
            //just console log me the results
            console.log(supremeLeader);
            console.log(supremeLeaderID);
    
            //edit the new leader
            cunt.helpScript["Leader"]= {
                cLeader: supremeLeader,
                cLeaderID: supremeLeaderID
            };
            epico.writeFile("/Users/Shahar_2/Desktop/Discord bot/WIN69CUNTBOT/JSON Files/helpScript.json", JSON.stringify(cunt.helpScript, null, 4), err => {
                if (err) throw err;
                console.log("The new Supreme leader has been submitted to the JSON script");
            });
    
            //annouce the new supreme leader and return
            msg.channel.send(supremeLeader.toUpperCase()+" IS THE NEW SUPREME LEADER!!");
            return msg.channel.send("for now tho Admins still have to reasign the Supreme Leader");
        }
    
        //get supreme leader contenders
        if (args[0]+" "+args[1]+" "+args[2]+" "+args[3]=="get supreme leader contenders") {
            const c=new Discord.MessageEmbed()
                .setTitle("Contenders to the Supreme Leadership")
                .addField("Contender number 1","מתן הגבר")
                .addField("Contender number 2","נועם המגודל")
                .addField("Contender number 3","נווה החתיך")
                .addField("Contender number 4","תיא משפיך המוזיקה")
                .addField("Contender number 5","אלומה, תקשיבו באמת צריך לפרט?")
                .addField("Contender number 6","שחר, אני הולך לנצל את הכוח לרעה")
                .addField("Contender number 7","אילאיי, מרביץ לליאו")
                .addField("Contender number 8","אפיק אניסת אוזניים")
                .addField("Contender number 9","אליה, אבא של כולנו")
                .addField("Contender number 10","אריאל מאמי")
                .addField("Contender number 11","יאיר, יביא שיוויון וצדק במדינת ישר. זאת אומרת לשרת")
                .addField("Contender number 12","ליאו המגניב 69")
            return msg.reply(c);
        }
    
    }
}


module.exports= newLeader;