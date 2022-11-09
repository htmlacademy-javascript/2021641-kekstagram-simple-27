import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');
const body = document.querySelector('body');

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const closeModal = () => {
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () => document.activeElement === commentField;

function onEscKeyDown(evt) {
  if(isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

const onCancelClick = () => {
  closeModal();
};

const onFileInputChange = () => {
  openModal();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelClick);
