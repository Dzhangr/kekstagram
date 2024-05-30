'use strict'

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(1, 10);

// проверка комментария

const stringCount = (text, sign) => {
  return text.length <= sign;
};

stringCount('Это проверочное сообщение', 30);
