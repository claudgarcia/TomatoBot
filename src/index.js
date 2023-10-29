//client is our bot 
//intents: permissions we can use
//guilds permission: access to know when guild updated/deleted
// a guild is a server,
require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
        ]


})

client.on('ready', (c)=>{
    console.log(`${c.user.tag} is online`)
})

client.on("messageCreate" , (msg)=>{
    console.log(msg.content)
} )

client.on("messageCreate" , (msg)=>{
    if(msg.content === 'hello'){
        msg.reply("HI")
    }
} )

client.on("messageCreate" , (msg)=>{
    if(msg.author.bot){
        return
    }
} )

client.login(process.env.TOKEN);