export const templateHeader = () => `
  <header class="header">
    <h1 class="header__title">LOGO</h1>
  </header>`;

export const templateSearchBar = ({ input }) => {
  let search = `
  <section class="search">
    <input class="search__input" type="text" placeholder="search">
    <ul class="search_list">`;

  input.forEach(item => {
    search += `
      <li class="search__item">${item}</li>`;
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
