import {renderPosts} from './render-posts.js';
import {closeModal, setFormSubmit} from './form.js';
import {getData} from './api.js';

getData((posts) => {
  renderPosts(posts);
});

setFormSubmit(closeModal);
