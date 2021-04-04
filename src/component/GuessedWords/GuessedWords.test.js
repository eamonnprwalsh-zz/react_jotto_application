import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  guessedWords: [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "cake", letterMatchCount: 2 },
  ],
};

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

describe("if there are no words guessed", () => {
  let wrapper;
   
  beforeEach(() => {
    wrapper = setup({guessedWord: []});
  });

  test("component renders without error", () => {
    wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "guessed-words-component");
    expect(appComponent.length).toBe(1);
  });

  test("render instructions to guess a word", () => {
    wrapper = setup();
    const instructions = findByTestAttr(wrapper, "guessed-word-instructions");
    expect(instructions.length).toBe(1);
  });


});

describe("if there are words guessed", () => {



});
