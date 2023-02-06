//imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//Selectors

const timerRef = document.querySelector('.timer');
const startBtnRef = document.getElementById('start-button');
const inputRef = document.getElementById('datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      window.alert('pick another date');
      startBtnRef.setAttribute('disabled', true);
    } else {
      startBtnRef.addEventListener('click', setTimer);
      startBtnRef.removeAttribute('disabled', true);

      function setTimer() {
        timer = setInterval(() => {
          const diff = selectedDates[0] - new Date();

          const { days, hours, minutes, seconds } = convertMs(diff);

          daysRef.innerHTML = days < 10 ? addLeadingZero(days) : days;
          hoursRef.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          minutesRef.innerHTML =
            minutes < 10 ? addLeadingZero(minutes) : minutes;
          secondsRef.innerHTML =
            seconds < 10 ? addLeadingZero(seconds) : seconds;

          if (diff < 1000) {
            clearInterval(timer);
          }
        }, 1000);
      }
      function addLeadingZero(value) {
        const stringValue = String(value);
        return stringValue.padStart(2, '0');
      }
      function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }
    }
  },
};

flatpickr(inputRef, options);

// addLeadingZero

//    function addLeadingZero(value) {
//     const stringValue = String(value);
//     return stringValue.padStart(2, '0');
//   }

//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
