import { SlashCommandBuilder } from "discord.js";
import db from "../../db";

export default {
    data: new SlashCommandBuilder().setName("books").setDescription("Gets an array of books from my database"),
    execute: async (interaction: any) => {
        const books = await db.books.getAll();
        await interaction.reply(JSON.stringify(books));
    },
};
