'use strict';


const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


const modalCloseFunc = function() { modal.classList.add('closed');}


modalCloseOverlay.addEventListener('click',modalCloseFunc);
modalCloseBtn.addEventListener('click',modalCloseFunc);


const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function() {
        notificationToast.classList.add('closed');
});