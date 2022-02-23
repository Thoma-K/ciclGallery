import { templateHeader, templateSearchBar, imagesTemplate } from '../src/templates';

describe('templateHeader', () => {
  test('Returns a string for a header', () => {
    const actual = templateHeader();
    const expected = `
  <header class="header">
    <h1 class="header__title">LOGO</h1>
  </header>`;

    expect(actual).toBe(expected);
  });
});

describe('searchBarTemplate', () => {
  test('Returns a string for a search with ', () => {
    const state = {
      input: [
        'dogs',
        'cats',
        'elephants',
      ],
    };
    const actual = templateSearchBar(state);
    const expected = `
  <section class="search">
    <input class="search__input" type="text" placeholder="search">
    <ul class="search__list">
      <li class="search__item">dogs</li>
      <li class="search__item">cats</li>
      <li class="search__item">elephants</li>
    </ul>
  </section>`;

    expect(actual).toBe(expected);
  });
});

describe('imagesTemplate', () => {
  test('Returns a string for a list of images', () => {
    const state = {
      images: [
        'link1',
        'link2',
        'link3',
      ],
    };
    const actual = imagesTemplate(state);
    const expected = `
  <section class="images">
    <ul class="images__list">
      <li class="images__item"><img class="images__el" src="link1"></li>
      <li class="images__item"><img class="images__el" src="link2"></li>
      <li class="images__item"><img class="images__el" src="link3"></li>
    </ul>
  </section>`;
    expect(actual).toBe(expected);
  });
});
