import {isEscapeKey, getTemplateElement} from './util.js';
import {onPushEscToClosePopup} from './form.js';

const ALERT_SHOW_TIME = 5000;

const bodyElement = document.querySelector('body');

const errorUploadTemplate = getTemplateElement(bodyElement, 'error', 'error');

const successUploadTemplate = getTemplateElement(bodyElement, 'success', 'success');

const openUploadMessagePopup = (popupType) => {

  let popupTemplate;
  let popupInnerSection;
  let popupButtonElementClass;

  switch (popupType) {
    case 'success':
      popupTemplate = successUploadTemplate;
      popupInnerSection = '.success__inner';
      popupButtonElementClass = '.success__button';
      break;
    case 'error':
      popupTemplate = errorUploadTemplate;
      popupInnerSection = '.error__inner';
      popupButtonElementClass = '.error__button';
      break;
  }

  const innerPopup = popupTemplate.cloneNode(true);
  const innerPopupSection = innerPopup.querySelector(popupInnerSection);
  const popupButton = innerPopup.querySelector(popupButtonElementClass);

  const onPushEscMessagePopup = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUploadMessagePopup();
      document.addEventListener('keydown', onPushEscToClosePopup);
    }
  };

  const onOutsideClickCloseMessagePopup = (evt) => {
    const isOutsideClick = !evt.composedPath().includes(innerPopupSection);
    if (isOutsideClick) {
      closeUploadMessagePopup();
      document.addEventListener('keydown', onPushEscToClosePopup);
    }
  };

  function closeUploadMessagePopup() {
    popupButton.removeEventListener('click', closeUploadMessagePopup);
    document.removeEventListener('keydown', onPushEscMessagePopup);
    document.removeEventListener('click', onOutsideClickCloseMessagePopup);
    innerPopup.remove();
    document.addEventListener('keydown', onPushEscToClosePopup);
  }

  document.addEventListener('keydown', onPushEscMessagePopup);
  document.addEventListener('click', onOutsideClickCloseMessagePopup);
  document.removeEventListener('keydown', onPushEscToClosePopup);

  popupButton.addEventListener('click', closeUploadMessagePopup);

  bodyElement.appendChild(innerPopup);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { openUploadMessagePopup, showAlert };
