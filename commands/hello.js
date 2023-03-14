const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Will send you hello!'),
    async execute(interaction) {
        await interaction.reply('Hello! ' + interaction.user.username);
    },
};
