import { Telegraf } from 'telegraf';
import express from 'express';
import dotenv from 'dotenv';
import { inlineQuery } from './handlers/inline-query';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.on('inline_query', inlineQuery);
  bot.launch();
});
