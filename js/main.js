import {renderPosts} from './render-posts.js';
import {closeModal} from './form.js';
import {getData} from './api.js';

getData((posts) => {
  renderPosts(posts);
});

closeModal();
