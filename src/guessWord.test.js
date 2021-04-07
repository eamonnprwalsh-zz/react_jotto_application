import { mount } from "enzyme";
//import React from "react";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = (state) => {
  // TODO: apply state
  const wrapper = mount(<App {...state} />);

  if (state.success === false) {

    console.log('success is false.. ')

    // add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "train" } });

    // simulate a click
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  }

  return wrapper;
};

describe.skip("no words have been guessed", () => {
  let wrapper;

  const defaultProps = {
    secretWord: "party",
    success: false,
    guessedWords: [],
  };

  beforeEach(() => {
    wrapper = setup(defaultProps);
  });

  test("no words have been guessed", () => {
    const guessWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRows.length).toEqual(1);
  });
});

describe.skip("some words have been guessed", () => {
  let wrapper;

  const defaultProps = {
    secretWord: "party",
    success: false,
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 1 },
      { guessedWord: "cake", letterMatchCount: 3 },
    ],
  };

  beforeEach(() => {
    wrapper = setup(defaultProps);
  });

  test("3 words in the guess row words", () => {
    const guessWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRows.length).toEqual(3);
  });
});

/*
describe.todo("word does not match", () => {
});
*/

describe.skip("correct word has been guessed", () => {
  let wrapper;

  const defaultProps = {
    secretWord: "party",
    success: false,
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 1 },
      { guessedWord: "cake", letterMatchCount: 3 },
    ],
  };

  beforeEach(() => {
    wrapper = setup(defaultProps);
  });

  test("the correct congrats message is displayed", () => {

    // add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("click", { target: { value: "party" } });

    // simulate a click
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });

    const guessWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRows.length).toEqual(3);

    const appComponent = findByTestAttr(wrapper, "congrats-message");
    expect(appComponent.text()).toBe("Congrats you guessed the Secret Word!!");


  });


  
});
