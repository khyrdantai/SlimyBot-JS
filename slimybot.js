// Require the necessary discord.js classes and files
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const env = require('dotenv').config();

// Create a new bot instance with commands
const slimybot = new Client({ intents: [Intents.FLAGS.GUILDS] });
slimybot.commands = new Collection;

// load in the commands
slimybot.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    slimybot.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
slimybot.once('ready', () => {
    console.log('Ready!');
});

slimybot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = slimybot.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Login to Discord with the token
slimybot.login(process.env.BOT_TOKEN).then();

