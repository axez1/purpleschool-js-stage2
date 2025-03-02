'use strict'

const countWrapper = document.querySelector('.count');
const buttonsWrapper = document.querySelector('.wrapper');
const buttons = buttonsWrapper.querySelectorAll('.btn');

let currentCount = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

countWrapper.textContent = currentCount;

const lastClickedButtonIndex = localStorage.getItem('lastClickedButtonIndex');

if (lastClickedButtonIndex !== null) {
  const lastClickedButton = buttons[lastClickedButtonIndex];
  lastClickedButton.classList.add('active');
  lastClickedButton.textContent = 'Нажата';
}

buttonsWrapper.addEventListener('click', ({ target }) => {
  let clickedButton = target.closest('.btn');

  if (clickedButton) {
    buttons.forEach((button, index) => {
      button.classList.remove('active');
      button.textContent = 'Нажми меня';

      if (button === clickedButton) {
        localStorage.setItem('lastClickedButtonIndex', index);
      }
    });
  }

  clickedButton.classList.add('active');
  clickedButton.textContent = 'Нажата';
  currentCount++;
  countWrapper.textContent = currentCount;

  localStorage.setItem('count', currentCount);
});
