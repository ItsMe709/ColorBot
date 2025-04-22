require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options, user } = interaction;

  switch (commandName) {
    case 'listcolors':
      return interaction.reply('🎨 Limited edition colors: Red (Rare), Blue (Epic), Gold (Legendary)');

    case 'givecolor':
      return interaction.reply(`${user.username} was given a limited edition color!`);

    case 'givecustomcolor':
      return interaction.reply(`${user.username} received a custom color!`);

    case 'createlimitedcolor':
      return interaction.reply(`✅ Custom limited color created!`);

    case 'setrarity':
      return interaction.reply(`🧪 Rarity set!`);

    case 'colorrarity':
      return interaction.reply(`⭐ The rarity of this color is 8/10.`);

    case 'mycolors':
      return interaction.reply(`👤 You currently own: Red (24h), Blue (permanent)`);

    case 'colorleaderboard':
      return interaction.reply(`🏆 Top color collectors:
1. @User1 - 3 rare colors
2. @User2 - 2 epic colors`);

    default:
      return interaction.reply('Unknown command!');
  }
});

client.login(process.env.DISCORD_TOKEN);
