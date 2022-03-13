// Require the necessary discord.js classes and files
const { Client, Intents } = require('discord.js');
const settings = require('./config.json');
const list_of_people = require('./discord_users.json');

// Create a new bot instance
const slimybot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
slimybot.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with the token
slimybot.login(settings.bot_token).then();

