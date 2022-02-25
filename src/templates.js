export const templateHeader = () => `
  <header class="header">
    <h1 class="header__title">LOGO</h1>
  </header>`;

export const templateSearchBar = ({ input }) => {
  let search = `
  <section class="search">
    <input class="search__input" list="list" type="text" placeholder="search">
    <datalist class="search__list" id="list">`;

  input.forEach(item => {
    search += `
      <option class="search__item" value="${item}">`;
  });

  search += `
    </datalist>
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

export const template = currentState => `
  ${templateHeader()}
  ${templateSearchBar(currentState)}
  ${imagesTemplate(currentState)}
`;
