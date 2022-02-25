const { JSDOM } = require('jsdom');
const { template } = require('../src/templates');

describe('Renders initial state correctly', () => {
  let document;

  beforeAll(() => {
    const state = {
      input: ['dogs', 'houses'],
      images: [],
    };
    // structure of HTML in string:
    const htmlDOM = new JSDOM(template(state));
    document = htmlDOM.window.document;
  });

  test('Check input search bar is rendered', () => {
    const element = document.querySelector('.search__input');
    expect(element).not.toBeUndefined();
  });
  test('Check input list length', () => {
    const element = document.querySelectorAll('.search__item');
    expect(element.length).toBe(2);
  });
  test('Check that we have no images', () => {
    const element = document.querySelectorAll('.images__item');
    expect(element.length).toBe(0);
  });
});
