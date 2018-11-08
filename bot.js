//=========================================================
// Botの準備
//=========================================================

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

//=========================================================
// 絵文字リアクション
//=========================================================

controller.hears(['アンケート】'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {

    function hai(){
        return new Promise(function(resolve, reject){
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: 'hai-',
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }else{
                    resolve('hai')
                }
            });
            
        });
    }
    function iie(){
        return new Promise(function(resolve, reject){
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: 'iie',
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }else{
                    resolve('iie')
                }
            });
        });
    }
    function sinngi(){
        return new Promise(function(resolve, reject){
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: 'sinngi',
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }else{
                    resolve('sinngi')
                }
            });
        });
    }

    Promise.resolve()
        .then(hai)
        .then(iie)
        .then(sinngi);
});

controller.hears(['募集】'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {

    function sanka(){
        return new Promise(function(resolve, reject){
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: 'sanka',
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }else{
                    resolve('sanka')
                }
            });
        });
    }
    function husanaka(){
        return new Promise(function(resolve, reject){
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: 'husanka',
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }else{
                    resolve('husanka')
                }
            });
        });
    }

    Promise.resolve()
        .then(sanka)
        .then(husanaka);
});