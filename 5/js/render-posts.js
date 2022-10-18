const renderPosts = (posts) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const pictureCollection = pictureTemplate.cloneNode(true);
    pictureCollection.querySelector('.picture__img').src = post.url;
    pictureCollection.querySelector('.picture__likes').textContent = post.likes;
    pictureCollection.querySelector('.picture__comments').textContent = post.comments;
    pictureCollection.dataset.postId = post.id;
    picturesFragment.append(pictureCollection);
  });

  picturesContainer.append(picturesFragment);
};

export {renderPosts};
