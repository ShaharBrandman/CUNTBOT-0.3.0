/*

WIN69CUNTBOT/index.js

Author: Shahar Brandman (2020)

*/
const Discord = require('discord.js')
const cunt = new Discord.Client()
const token = '<ENTER YOUR TOKEN>'
const prefix = '`'

cunt.on('ready', function() {
    console.log('CUNTBOT IS ONLINE!')
}).login(token)
/*const commandManagment = require('./Scripts/commandManagment');
const rankManagment = require('./Scripts/rankManagment');
const conversationCommands = require('./Scripts/conversationCommands');

//activate cunt bot
cunt.on('ready', () => {
    console.log('BOT IS ONLINE');
});
cunt.login(token);


cunt.on('message', (msg) => {
    new rankManagment().rankSystem(msg);
});


cunt.on('message', (msg) => {
    try {
        new commandVariable=new commandManagment();
        new conversationCommandsVariable=new conversationCommands();
        //conversationCommandsVariable.interupt(msg);
        //commandVariable.command(msg);
    }
    catch {
        const rankSystemBackup=require('./Scripts/rankSystemBackup');
        const rankSystemBackupVariable=new rankSystemBackup();
        rankSystemBackupVariable.backup();
        return console.log("Function error");
    }
    try {
        const args = msg.content.substring(prefix.length).split(' ');
        switch (args) {
            case args[0] = "HELLO":
                return msg.content.send("NIGGER");
            default:
                return msg.channel.send("CUNT");
        }
    }
    catch {
        const rankSystemBackup=require('./Scripts/rankSystemBackup');
        new rankSystemBackup().backup();
        return console.log("Function error");
    }
});


//Disabled FBI Channel because I'm sick of it
//01/10/2020:09:45
//cunt.on('presenceUpdate', (member) => {
    //fbiChannelVariable.manageFbiChannel(member, cunt);
//});

*/