const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const CHANGE_COLOR_DELAY = 1000;
let intervarID = null;
let isStarted = false;

document.body.style.backgroundColor = localStorage.getItem('bgc');

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

isActiveBtn(isStarted);

refs.start.addEventListener('click', onStartChangeColor);
refs.stop.addEventListener('click', onStopChandeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function isActiveBtn(x) {
  refs.start.disabled = x;
}
function onStartChangeColor() {
  if (isStarted) {
    return;
  }
  isStarted = true;

  intervarID = setInterval(() => {
    isActiveBtn(isStarted);
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('bgc', `${randomColor}`);
  }, CHANGE_COLOR_DELAY);
}

function onStopChandeColor() {
  isStarted = false;
  isActiveBtn(isStarted);

  clearInterval(intervarID);
}
