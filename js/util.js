const isEscapeKey = (evt) => evt.key === 'Escape';

const getTemplateElement = (parent, templateId, elementClass) => parent.querySelector(`#${templateId}`).content.querySelector(`.${elementClass}`);

export {isEscapeKey, getTemplateElement};
