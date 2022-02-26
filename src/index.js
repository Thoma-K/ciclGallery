import { template } from './templates';
import './styles/main.scss';

const localStorageInput = localStorage.getItem('input');

let state = {
  input: localStorageInput === null ? [] : JSON.parse(localStorageInput),
  images: [],
};

const update = newState => {
  state = { ...state, ...newState };
  window.localStorage.setItem('inputs', JSON.stringify(state.inputs));
  window.history.pushState({}, '', `#${state.inputs[0]}`);
  window.dispatchEvent(new Event('statechange'));
};

const getImages = async query => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
    },
  });
  const json = await response.json();
  return json.results.map(obj => obj.urls.small);
};

const addInput = (input, inputs) => {
  const filteredInputs = inputs.filter(el => el !== input);
  return [input, ...filteredInputs].slice(0, 5);
};

const render = (htmlString, el) => {
  // eslint-disable-next-line no-param-reassign
  el.innerHTML = htmlString;
  document.querySelector('form').addEventListener('submit', async event => {
    event.preventDefault();
    const input = document.querySelector('input').value;
    const imgList = await getImages(input);
    const newState = {
      input: addInput(input, state.input),
      images: imgList,
    };
    update(newState);
    localStorage.setItem('input', JSON.stringify(newState.input));
    window.history.pushState({}, '', `#${input}`);
  });
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

const init = async () => {
  if (window.location.hash) {
    const hashInput = window.location.hash.slice(1);
    const imgList = await getImages(hashInput);
    const newState = {
      input: addInput(hashInput, state.input),
      images: imgList,
    };
    update(newState);
    localStorage.setItem('input', JSON.stringify(newState.input));
    return;
  }
  render(template(state), document.querySelector('#root'));
};

init();
