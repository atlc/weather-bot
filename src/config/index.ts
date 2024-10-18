import dotenv from "dotenv";
dotenv.config();

const discord = {
    app_id: process.env.DISCORD_APP_ID,
    pub_key: process.env.DISCORD_PUB_KEY,
    client_id: process.env.DISCORD_CLIENT_ID as string,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    token: process.env.DISCORD_TOKEN as string,
    guild_id: process.env.DISCORD_GUILD_ID as string,
};

const mysql = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
};

const weather = {
    api_key: process.env.OPENWEATHER_API_KEY as string,
};

export default {
    discord,
    mysql,
    weather,
};
