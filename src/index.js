import { template } from './templates';

let state = {
  input: ['dogs', 'houses'],
  images: [],
};

const update = newState => {
  state = { ...state, ...newState };
  window.dispatchEvent(new Event('statechange'));
};

const getImages = async query => {
  const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=${query}`);
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
  document.querySelector('input').addEventListener('keydown', async event => {
    if (event.key === 'Enter') {
      const input = event.target.value;
      const imgList = await getImages(input);
      const newState = {
        input: addInput(input, state.input),
        images: imgList,
      };
      update(newState);
    }
  });
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

render(template(state), document.querySelector('#root'));
