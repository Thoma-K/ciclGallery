import { templateHeader, templateSearchBar, imagesTemplate } from './templates';

let state = {
  input: ['dog', 'cat'],
  images: [],
};

const template = currentState => `
  ${templateHeader()}
  ${templateSearchBar(currentState)}
  ${imagesTemplate(currentState)}
`;

const update = newState => {
  state = { ...state, ...newState };
  window.dispatchEvent(new Event('statechange'));
};

const getImages = query => fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=${query}`)
  .then(res => res.json())
  .then(json => json.results.map(obj => obj.urls.small))
  .then(imageList => update({ images: imageList }));

const render = (htmlString, el) => {
  // eslint-disable-next-line no-param-reassign
  el.innerHTML = htmlString;
  document.querySelector('input').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const input = event.target.value;
      getImages(input);
    }
  });
};

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});

render(template(state), document.querySelector('#root'));
