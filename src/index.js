import template from './templates';
import './styles/main.scss';

const { ACCESS_KEY } = process.env;

let state = {
  inputs: window.localStorage.getItem('inputs') ? JSON.parse(window.localStorage.getItem('inputs')) : [],
  images: [],
};

const addInput = (inputs, input) => [input, ...inputs]
  .reduce((arr, el) => (arr.includes(el) ? arr : [...arr, el]), [])
  .filter((el, i) => i <= 5);

const update = newState => {
  state = { ...state, ...newState };
  window.localStorage.setItem('inputs', JSON.stringify(state.inputs));
  window.history.pushState({}, '', `#${state.inputs[0]}`);
  window.dispatchEvent(new Event('statechange'));
};

const getImages = async query => {
  const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}`);
  const json = await res.json();
  return json.results.map(obj => obj.urls.small);
};

const eventListenerInput = event => {
  if (event.key === 'Enter') {
    const input = event.target.value;
    getImages(input)
      .then(imgList => update({
        inputs: addInput(state.inputs, input),
        images: imgList,
      }));
  }
};

const eventListenerButton = event => {
  const name = event.target.textContent;
  getImages(name)
    .then(imgList => update({
      inputs: addInput(state.inputs, name),
      images: imgList,
    }));
};

const render = (htmlString, el) => {
  if (document.querySelector('input')) {
    document.querySelector('input').addEventListener('keydown', eventListenerInput);
  }

  document.querySelectorAll('button').forEach(button => {
    button.removeEventListener('click', eventListenerButton);
  });
  // eslint-disable-next-line no-param-reassign
  el.innerHTML = htmlString;

  document.querySelector('input').addEventListener('keydown', eventListenerInput);

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', eventListenerButton);
  });
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

const url = new URL(window.location.href);

if (url.hash) {
  const hash = url.hash.slice(1);
  getImages(hash)
    .then(imgList => update({
      inputs: addInput(state.inputs, hash),
      images: imgList,
    }));
} else {
  render(template(state), document.querySelector('#root'));
}
