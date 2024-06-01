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

// Задание 3.11

const USERS_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const USERS_NAME = ['Андрей', 'Виктория', 'Валерия', 'Бадма', 'Альмина', 'Юлия', 'Егор']

const getRandomArrayElement = (min, max) => {
  return _.random(min, max);
};

const createUser = () => {
  return {
    id: getRandomArrayElement(0, 25),
    url: 'photos/' + getRandomArrayElement(0, 25) + '.jpg',
    description: 'Описание изображения-' + getRandomArrayElement(0, 25),
    likes: getRandomArrayElement(15, 200),
    comments: {
      id: getRandomArrayElement(0, 100000),
      avatar: 'img/avatar-' + getRandomArrayElement(0, 6) + '.svg',
      message: USERS_COMMENTS[_.random(0, USERS_COMMENTS.length - 1)],
      name: USERS_NAME[_.random(0, USERS_NAME.length - 1)],
    },
  };
};

const randomUsers = new Array(10).fill(null).map(() => createUser());
randomUsers();
