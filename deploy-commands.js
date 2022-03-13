const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { server_id, bot_id, bot_token} = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(bot_token);

rest.put(Routes.applicationGuildCommands(bot_id, server_id), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);