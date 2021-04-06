import { mount } from "enzyme";
import React from "react";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = (state) => {
  
  // TODO: apply state
  const wrapper = mount(<App {...state}/>);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("click", { target: { value: "train" } });

  // simulate a click
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault(){} });

  return wrapper;
};

describe('no words have been guessed', () => {
  let wrapper;

  const defaultProps = {
    secretWord: 'home',
    success: false,
    guessedWords : [
      { guessedWord: "train", letterMatchCount: 1 },
      { guessedWord: "cake", letterMatchCount: 22 },
    ]
  }

  beforeEach(()=>{
    wrapper = setup(defaultProps);
  })

  test('creates guessed words table with one row', () => {
    const guessWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessWordRows.length).toEqual(2);
  })

})

describe('some words have been guessed', () => {
  test('sdfsdff', () => {
    
  })
})

describe('guess secret word', () => {
  test('sdfsdff', () => {
    
  })
})