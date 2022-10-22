import data from '../data';
import config from '../config';
import { getEmoji, getRandom } from '../utils';
import { Context } from 'telegraf';

export const inlineQuery = async (ctx: Context) => {
  const randomSize = getRandom();

  const message = {
    size: randomSize,
    emoji: getEmoji(randomSize),
  };

  await ctx.answerInlineQuery(
    [
      {
        id: '1',
        type: 'article',
        title: data.inlineQuery.title,
        input_message_content: {
          parse_mode: 'MarkdownV2',
          message_text: `${data.inlineQuery.message} *${message.size}cm* ${message.emoji}`,
        },
      },
    ],
    { cache_time: config.CACHE_TIME }
  );
};
