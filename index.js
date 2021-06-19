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
document.body.style.backgroundColor = localStorage.getItem('bgc');

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', onStartChangeColor);
refs.stop.addEventListener('click', onStopChandeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartChangeColor() {
  intervarID = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    this.disabled = true;
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('bgc', `${randomColor}`);
  }, CHANGE_COLOR_DELAY);
}

function onStopChandeColor() {
  clearInterval(intervarID);
  refs.start.disabled = false;
}
