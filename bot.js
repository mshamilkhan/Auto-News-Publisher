// const { Client, MessageEmbed } = require('discord.js');
const axios = require('axios').default;

// const client = new Client();
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        // Add more intents your bot requires
    ]
});

// ... rest of your code ...


const prefix = '!'; // The prefix for commands

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async message => { // Use messageCreate event
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'getnews') {
        const apiKey = 'xxxxxxxxxxxxx';
        const query = 'Bitcoin';

        const apiUrl = 'https://api.newscatcherapi.com/v2/search';

        try {
            const response = await axios.get(apiUrl, {
                params: { q: query, lang: 'en', sort_by: 'relevancy', page: '1' },
                headers: {
                    'x-api-key': apiKey,
                },
            });

            const articles = response.data.articles;
            if (articles.length > 0) {
                articles.forEach(article => {
                    const embed = new MessageEmbed() // Use MessageEmbed directly
                        .setTitle(article.title)
                        .setURL(article.link)
                        .setDescription(article.summary)
                        .setTimestamp(article.published_date);

                    message.channel.send({ embeds: [embed] }); // Send embed using an array
                });
            } else {
                message.channel.send('No news articles found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            message.channel.send('An error occurred while fetching news.');
        }
    }
    else if (command === 'stop') {
        shouldSendNews = false; // Set the flag to stop sending news
        message.channel.send('News delivery has been stopped.');
    }
});

const token = 'xxxxxxxxxxxxxxxxxxx';
client.login(token);




// const { Client, Intents, MessageEmbed } = require('discord.js');
// const axios = require('axios').default;
// const openai = require('openai');
// const client = new Client({
//     intents: [
//         Intents.FLAGS.GUILDS,
//         Intents.FLAGS.GUILD_MESSAGES,
//         // Add more intents your bot requires
//     ]
// });

// // ... rest of your code ...

// const openaiApiKey = "xxxxxxxxxxxxxxxxxxxx"; // Replace with your OpenAI API key
// const prefix = '!';
// client.on('messageCreate', async message => {
//     console.log('Received message:', message.content);
//     if (message.author.bot) return;
//     if (!message.content.startsWith(prefix)) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'stop') {
//         shouldSendNews = false; // Set the flag to stop sending news
//         message.channel.send('News delivery has been stopped.');
//     }
//     else if (command === 'news') {
//         // Fetch news articles and generate summaries here
//         const apiKey = 'xxxxxxxxxxxxxxxx';
//         const query = 'Artificial Intelligence';
//         const apiUrl = 'https://v3-api.newscatcherapi.com/v1/search';

//         try {
//             const response = await axios.get(apiUrl, {
//                 params: { q: query, lang: 'en', sort_by: 'relevancy', page: '1' },
//                 headers: {
//                     'x-api-key': apiKey,
//                 },
//             });

//             const articles = response.data.articles;
//             if (articles.length > 0) {
//                 // Generate summaries using OpenAI API for each article
//                 for (const article of articles) {
//                     const summary = await generateSummaryUsingOpenAI(article.summary);
//                     const discussion = await generateDiscussionUsingOpenAI(summary);

//                     // Send the generated summary and discussion to the channel
//                     const embed = new MessageEmbed()
//                         .setTitle(article.title)
//                         .setURL(article.link)
//                         .addField('Summary', summary)
//                         .addField('Discussion', discussion)
//                         .setTimestamp(article.published_date);

//                     message.channel.send({ embeds: [embed] });
//                 }
//             } else {
//                 message.channel.send('No news articles found.');
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             message.channel.send('An error occurred while fetching news.');
//         }
//     }
// });

// const token = 'MTEzOTk2MDkyNzk1ODA3MzM1NA.G0LwVm.GRMTnff1uMlJ8yqNC1GrZLjIEWSBEUtfZCrTWk';
// client.login(token);

// async function generateSummaryUsingOpenAI(text) {
//     // Use the OpenAI API to generate a summary
//     const response = await axios.post(
//         'https://api.openai.com/v1/engines/davinci-codex/completions',
//         {
//             prompt: `Summarize the following text:\n\n${text}`,
//             max_tokens: 100,
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${openaiApiKey}`,
//                 // 'x-api-key': openaiApiKey,
//             },
//         }
//     );

//     return response.data.choices[0].text.trim();
// }


// async function generateDiscussionUsingOpenAI(text) {
//     // Use the OpenAI API to generate a discussion about the summary
//     const response = await axios.post(
//         'https://api.openai.com/v1/engines/davinci/completions',
//         {
//             prompt: `Discuss the following summary:\n\n${text}`,
//             max_tokens: 150,
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${openaiApiKey}`,
//                 // 'x-api-key': openaiApiKey,
//             },
//         }
//     );

//     return response.data.choices[0].text.trim();
// }
