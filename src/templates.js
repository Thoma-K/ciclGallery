export const templateHeader = () => `
  <header class="header">
    <h1 class="header__title">LOGO</h1>
  </header>`;

export const templateSearchBar = ({ inputs }) => {
  let search = `
  <section class="search">
    <input class="search__input" type="text" placeholder="search">
    <ul class="search__list">`;

  inputs.forEach(item => {
    search += `
      <li class="search__item"><button>${item}</button></li>`;
  });

  search += `
    </ul>
  </section>`;

  return search;
};

export const imagesTemplate = ({ images }) => {
  let imgs = `
  <section class="images">
    <ul class="images__list">`;

  images.forEach(item => {
    imgs += `
      <li class="images__item"><img class="images__el" src="${item}"></li>`;
  });

  imgs += `
    </ul>
  </section>`;

  return imgs;
};

const template = currentState => `
  ${templateHeader()}
  ${templateSearchBar(currentState)}
  ${imagesTemplate(currentState)}
`;

export default template;
