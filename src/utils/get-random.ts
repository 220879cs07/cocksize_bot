import config from '../config';

export const getRandom = (from = config.MIN, to = config.MAX): number => {
  return Math.floor(Math.random() * from) + to;
};
