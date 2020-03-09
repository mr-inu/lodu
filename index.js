require('dotenv').config();
const request = require('request');
const fetch = require('node-fetch')
const Discord = require('discord.js');
const bot  = new Discord.Client();
const TOKEN = process.env.TOKEN
var insults = ["Heaven truly knows that thou art false as hell","Thou subtle, perjur’d, false, disloyal man!","Dissembling harlot, thou art false in all","Threadbare juggler!",
"Eater of broken meats!","Would thou wert clean enough to spit upon.","A fool, an empty purse. There was no money in’t.","You are not worth another word, else I’d call you knave.",
"Foul spoken coward, that thund’rest with thy tongue, and with thy weapon nothing dares perform.","Away thou rag, thou quantity, thou remnant.",
"Four of his five wits went halting off, and now is the whole man governed with one: so that if he have wit enough to keep himself warm, let him bear it for a difference between himself and his horse; for it is all the wealth that he hath left, to be known a reasonable creature.",
"They have a plentiful lack of wit.","It is a tale told by an idiot, full of sound and fury, signifying nothing.",
"His wit’s as thick as a Tewkesbury mustard.","Your abilities are too infant-like for doing much alone.",
"If thou wilt needs marry, marry a fool; for wise men know well enough what monsters you make of them.",
"More of your conversation would infect my brain.","Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows!","Your brain is as dry as the remainder biscuit after voyage.",
"If you spend word for word with me, I shall make your wit bankrupt.",
"He has not so much brain as ear-wax","Thou art the cap of all the fools.",
"Thou whoreson zed, thou unnecessary letter!","You are as a candle, the better burnt out.",
"I do desire that we may be better strangers. ",]

function select(){
   var num= Math.floor((Math.random() * 22) + 1);
   return insults[num];
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

bot.on('message', msg=>{
    if (msg.content.startsWith('!loducat')) {
        request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

        }, function(error, response, body) {
            if(!error && response.statusCode == 200) {
                msg.channel.send(response.request.uri.href);
            } else {
                console.log(error);
            }
        })
    }
    if(msg.content.startsWith('!loduinsult') || msg.content.startsWith('!LoduInsult')){
        shakeInsult = select();
        console.log(shakeInsult);
        msg.channel.send(shakeInsult);
    }
 
    if(msg.content.startsWith('!loduintro')){
        msg.channel.send('Hello\nMy name is Biryani Lodu\nEveryone calls me Lodu sir,even though that is my fathers name sir\nI am here because my creator is very lazy sir and thinks this is cool sir\nHere is what I can do:\n1.!loduintro for introduction\n2.!loduinsult or !LoduInsult for random Shakespearean insult\n3.!loducat for a random cat picture\nThank you sir.');
    }
})
