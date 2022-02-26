import { template } from './templates';
import './styles/main.scss';

const localStorageInput = localStorage.getItem('input');

let state = {
  input: localStorageInput === null ? [] : JSON.parse(localStorageInput),
  images: [],
};

const update = newState => {
  state = { ...state, ...newState };
  window.localStorage.setItem('input', JSON.stringify(state.input));
  window.history.pushState(state, '', `?search=${state.input[0]}`);
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
  });
};

window.addEventListener('statechange', () => {
  render(template(window.history.state), document.querySelector('#root'));
});

const init = async () => {
  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');
  if (search) {
    const imgList = await getImages(search);
    const newState = {
      input: addInput(search, state.input),
      images: imgList,
    };
    update(newState);
    localStorage.setItem('input', JSON.stringify(newState.input));
    return;
  }

  if (window.history.state) {
    render(template(window.history.state), document.querySelector('#root'));
    return;
  }

  render(template(state), document.querySelector('#root'));
};

window.addEventListener('popstate', e => {
  render(template(e.state), document.querySelector('#root'));
});

init();
