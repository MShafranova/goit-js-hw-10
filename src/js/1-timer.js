import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');

let userDate;
let timerIsRunning = false;
let countdownInterval;

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    userDate = selectedDate[0];
    if (userDate < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};
function startTimer() {
  if (timerIsRunning) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  timerIsRunning = true;
  countdownInterval = setInterval(updateTimer, 1000, userDate);
  startButton.disabled = true;
}

function updateTimer(userDate) {
  const currentDate = new Date();
  const remainingTime = userDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(remainingTime);

  if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
    daysData.textContent = addLeadingZero(days);
    hoursData.textContent = addLeadingZero(hours);
    minutesData.textContent = addLeadingZero(minutes);
    secondsData.textContent = addLeadingZero(seconds);
  }
  if (remainingTime <= 0) {
    stopTimer();
  }
}

startButton.addEventListener('click', () => {
  if (userDate && !timerIsRunning) {
    startTimer();
  }
});

function stopTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);

    daysData.textContent = '00';
    hoursData.textContent = '00';
    minutesData.textContent = '00';
    secondsData.textContent = '00';

    countdownInterval = null;
    timerIsRunning = false;
    startButton.disabled = false;
  }
}
function addLeadingZero(number) {
  return ('0' + number).slice(-2);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr(datetimePicker, options);
