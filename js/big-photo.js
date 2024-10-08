const bigPicture = document.querySelector('.big-picture');
const scrollOff = document.querySelector('body');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
commentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  scrollOff.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
};

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

const renderComment = (comment) => {
  const commentSimilar = commentTemplate.cloneNode(true);

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);
};

const show = (picture) => {
  scrollOff.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  renderComments(picture.comments);
  
  bigPicture.classList.remove('hidden');
};

export { show };
