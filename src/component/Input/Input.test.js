import { shallow } from "enzyme";
import Input from "./Input";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import React from "react";
import {testCall} from '../../../test/testUtils'

//let mockSetCurrentGuess = jest.fn();

/*
jest.mock('react', ()=> ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}));
*/


const defaultProps = {
  success: true,
  secretWord: "party",
};

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

test("does not throw a warning against default props", () => {
  checkProps(Input, defaultProps);
});

describe("render", () => {

  describe("success true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "input-component");
      expect(inputComponent.exists()).toBe(true);
    });
    test("there is no input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    })
    test("there is no submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    })
  });

  describe("success false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "input-component");
      expect(inputComponent.exists()).toBe(true);
    });
    test("there is an input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    })
    test("there is a submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    })

  });
});

describe("empty input box", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup(false);
  });

  test("for existence of empty input box", () => {
    const inputField = findByTestAttr(wrapper, "input-box");
    expect(inputField.text().length).toBe(0);
  });
});

describe("state controller input box", () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  let originalUseState;

  beforeEach(() => {
    // This is a replacement function for useState
    // Below is mocking [currentGuess, setCurrentGuess] with '' and mockSetCurrentGuess
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  
  afterEach(() => {
    React.useState = originalUseState;
  });
  

  test("setCurrentGuess called when the input field changes", () => {
    const inputField = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputField.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("setCurrentGuess called when the submit button pressed", () => {
    const btn = findByTestAttr(wrapper, "submit-button");
    btn.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
