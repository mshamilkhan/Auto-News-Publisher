// const Discord = require("discord.js");
// const client = new Discord.Client();
// const request = require("request");
// const cheerio = require("cheerio");
// require("dotenv").config();
// var urls = [];

// request("https://www.albany.edu/undergraduate_bulletin/I_csi.html", function (err, resp, body) {
//     if (!err && resp.statusCode == 200) {
//         var $ = chherio.load(body);
//         $(('p', '.text-box').search(function () {
//             var url = $(this).text();
//             urls.push(url);
//         }));
//     }
// });

// client.login(process.env.DISCORD_BOT_TOKEN);
// client.on('ready', () => {
//     console.log("Bot is ready");
//     concatenate();
//     console.log(urls.length);
// });