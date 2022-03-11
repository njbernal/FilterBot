const express = require('express')
const PORT = process.env.PORT || 5000
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated: ${interaction.guild.createdAt}.`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'spotify') {
		await interaction.reply(`One day soon I'll learn to search Spotify for you.`);
	}
});

// Login to Discord with your client's token
client.login(token);
