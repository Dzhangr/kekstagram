import { photos } from './util.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const renderPhoto = ({url, comments, likes}) => {
  const photoPreview = pictureTemplate.cloneNode(true);

  photoPreview.querySelector('.picture__img').src = url;
  photoPreview.querySelector('.picture__likes').textContent = likes;
  photoPreview.querySelector('.picture__comments').textContent = comments.length;

  return photoPreview;
};

const renderPhotos = () => {
  let picturesListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesListFragment.appendChild(renderPhoto(photo));
  });

  pictureList.appendChild(picturesListFragment);
};

export { renderPhotos };
