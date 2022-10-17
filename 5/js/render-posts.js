const pictureContainer = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPosts = (posts) => {
  const picturesFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const pictureCollection = pictureTemplate.cloneNode(true);
    pictureCollection.querySelector('.picture__img').src = post.url;
    pictureCollection.querySelector('.picture__likes').textContent = post.likes;
    pictureCollection.querySelector('.picture__comments').textContent = post.comments.length;
    pictureCollection.dataset.id = post.id;
    pictureCollection.append(picturesFragment);
  });

  pictureContainer.append(picturesFragment);
};

export {renderPosts};
