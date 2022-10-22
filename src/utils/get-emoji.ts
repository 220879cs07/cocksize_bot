export const getEmoji = (size: number): string => {
  if (size >= 30 && size <= 40) {
    return '😍🤯🥶';
  } else if (size >= 20 && size <= 30) {
    return '😤🤩';
  } else if (size >= 10 && size <= 20) {
    return '🥳';
  } else {
    return '🥱😴';
  }
};
