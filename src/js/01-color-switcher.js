const bodyRef = document.getElementsByTagName('body');

const startBtnRef = document.getElementById('start-btn');
const stopBtnRef = document.getElementById('stop-btn');

startBtnRef.addEventListener('click', startColor);
stopBtnRef.addEventListener('click', stopColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeDelay = 50;

let intervalID;

function startColor(e) {
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtnRef.setAttribute('disabled', true);
  }, colorChangeDelay);
}

function stopColor(e) {
  clearInterval(intervalID);
  startBtnRef.removeAttribute('disabled', true);
}
