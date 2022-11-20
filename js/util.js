function getRandomInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const creatRandomItem = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getTemplateElement = (parent, templateId, elementClass) => parent.querySelector(`#${templateId}`).content.querySelector(`.${elementClass}`);

export {getRandomInteger, creatRandomItem, isEscapeKey, getTemplateElement};
