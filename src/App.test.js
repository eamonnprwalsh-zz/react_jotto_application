import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import React from "react";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from "./actions";

// activate global mock to make sure we don't make the network call
jest.mock("./actions");

const setup = () => {
  const defaultProps = {
    secretWord: "party",
    success: false,
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "cake", letterMatchCount: 2 },
    ],
  };
  // useEffect doesn't run on shallow
  const wrapper = mount(<App {...defaultProps} />);
  return wrapper;
};

test("renders learn react link", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "app-component");
  expect(app).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test("call getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("call getSecretWord on app update", () => {
    const wrapper = setup();

    //get rid of the fact getSecretWord ran once on mount
    mockGetSecretWord.mockClear();

    // make getSecretWord run again if state changed
    wrapper.setProps();
    
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
