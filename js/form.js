import {isEscapeKey} from './util.js';
import {resetScale} from './image-scale.js';
import {resetEffect} from './image-effect.js';
import {sendData} from './api.js';
import {openUploadMessagePopup} from './message.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');
const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPushEscToClosePopup);
};

const closeModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPushEscToClosePopup);
};

const isTextFieldFocused = () => document.activeElement === commentField;

function onPushEscToClosePopup(evt) {
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  blockSubmitButton();

  const onSuccess = () => {
    closeModal();
    unblockSubmitButton();
    openUploadMessagePopup('success');
  };

  const onError = () => {
    unblockSubmitButton();
    openUploadMessagePopup('error');
  };

  sendData(formData, onSuccess, onError);
});


fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelClick);

export {closeModal, onPushEscToClosePopup};
