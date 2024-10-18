import { SlashCommandBuilder } from "discord.js";
import config from "../../config";

export default {
    data: new SlashCommandBuilder().setName("weather").setDescription("Gets the current weather for your ZIP code"),
    async execute(interaction: any) {
        const zip = 35205;
        const zipRes = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${config.weather.api_key}`);
        const { lat, lon } = await zipRes.json();

        if (!lat || !lon) {
            await interaction.reply(`couldn't find your location, chump`);
            return;
        }

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.weather.api_key}`);

        const data = await res.json();

        await interaction.reply(JSON.stringify(data));
    },
};
