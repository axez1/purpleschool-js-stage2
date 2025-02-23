'use strict'

const timerElement = document.getElementById('timer');

function updateTimer() {

  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeDiff = nextYear - now;

  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));

  timerElement.textContent = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateTimer, 1000);
updateTimer();