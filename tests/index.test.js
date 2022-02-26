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
      inputs: [
        'dogs',
        'cats',
        'elephants',
      ],
    };
    const actual = templateSearchBar(state);
    const expected = `
  <section class="search">
    <form class="search__form">
      <input class="search__input" list="list" type="text" placeholder="search">
      <datalist class="search__list" id="list">
        <option class="search__item" value="dogs">
        <option class="search__item" value="cats">
        <option class="search__item" value="elephants">
      </datalist>
      <button class="search__submit" type="submit">Submit</button>
    </form>
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
