import {getRandomInteger, creatRandomItem} from './util.js';

const COUNT = 25;

const DISCRIPTIONS = [
  'Красивые котики',
  'Неугомонный малыш',
  'Пухляш',
  'Молодая семейка',
  'Хоба'
];

const createPost = (id) => ({
  id: id,
  url: `photos/${ id }.jpg`,
  description: creatRandomItem(DISCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

const similarPosts = () => Array.from({length: COUNT}, (item, index) => createPost(index + 1));

