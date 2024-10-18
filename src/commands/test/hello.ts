import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder().setName("hello").setDescription("Replies with world!"),
    async execute(interaction: any) {
        await interaction.reply("world!");
    },
};
