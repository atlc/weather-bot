import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder().setName("weather").setDescription("Gets the weather for Birmingham"),
    async execute(interaction: any) {
        await interaction.reply("The weather is PENDING");
    },
};
