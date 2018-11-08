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
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'hai-',
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    }
    function iie(){
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'iie',
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    }
    function sinngi(){
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'sinngi',
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    }

    var promise = Promise.resolve();
    promise
        .then(hai)
        .then(iie)
        .then(sinngi);
});

controller.hears(['募集】'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {

    function sanka(){
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'sanka',
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    }
    function husanaka(){
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'husanka',
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    }

    var promise = Promise.resolve();
    promise
        .then(sanka)
        .then(husanaka);
});