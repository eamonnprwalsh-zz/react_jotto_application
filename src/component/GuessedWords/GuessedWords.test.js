import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'cake', letterMatchCount: 2 },
  ], 
};

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test('does not throw a warning against default props', ()=> {
  checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {

  let wrapper;
   
  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  });

  test('component renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'guessed-words-component');
    expect(appComponent.length).toBe(1);
  });

  test('render instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-word-instructions');
    expect(instructions.text().length).toBeGreaterThan(0);
  });


});

describe('if there are words guessed', () => {

  const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'cake', letterMatchCount: 2 },
      { guessedWord: 'party', letterMatchCount: 2 },
    ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({guessedWords});
  });


  test('component renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'guessed-words-component');
    expect(appComponent.length).toBe(1);
  });

  test('render guessed words section', () => {
    const guessWordSection = findByTestAttr(wrapper, 'guessed-words');
    expect(guessWordSection.length).toBe(1);
  });

  test('displays the correct number of guest words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  });
});

