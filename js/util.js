import { USERS_COMMENTS, USERS_NAME, TOTAL_PHOTOS, DESCRIPTION_PHOTO, Likes, Comments } from './data.js';

// Функция случайного числа из диапазона двух чисел

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

// Проверка комментария

const stringCount = (text, sign) => {
  return text.length <= sign;
};

stringCount('Это проверочное сообщение', 30);

// Случайный элемент массива

const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

// Создание комментариев к фотографии

const addComments = () => {
  let comments = [];

  for (let i = 0; i < getRandomInt(Comments.min, Comments.max); i++) {
    comments.push({
      id: i,
      avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message: getRandomElementArr(USERS_COMMENTS),
      name: getRandomElementArr(USERS_NAME),
    });
  }

  return comments;
};

// Создание массива описаний фотографий

let photos = [];

const addPhotos = () => {

  for (let i = 1; i < TOTAL_PHOTOS; i++) {
    photos.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: getRandomElementArr(DESCRIPTION_PHOTO),
      likes: getRandomInt(Likes.min, Likes.max),
      comments: addComments(),
    });
  }
};

addPhotos();

export { photos };



