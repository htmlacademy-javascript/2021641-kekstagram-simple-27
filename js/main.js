function getRandomInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomInteger();
checkStringLength();

const COUNT = 25;

const DISCRIPTIONS = [
  'Красивые котики',
  'Неугомонный малыш',
  'Пухляш',
  'Молодая семейка',
  'Хоба'
];

const creatRandomItem = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const createPost = (postId) => {
  const post = [];

  for (let i = 1; i <= postId; i++) {
    post.push({
      id: i,
      url: `photos/ ${ i } .jpg`,
      description: creatRandomItem(DISCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: getRandomInteger(0, 200),
    });
  }

  return post;
};

createPost();
