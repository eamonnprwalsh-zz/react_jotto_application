import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import React from 'react';
import App from './App';

const setup = () => {
  
  const defaultProps = {
    secretWord: 'party',
    success: false,
    guessedWords : [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "cake", letterMatchCount: 2 },
    ]
  }
  const wrapper = shallow(<App {...defaultProps}/>);
  return wrapper;
};

test('renders learn react link', () => {
  const wrapper = setup()
  const app = findByTestAttr(wrapper, 'app-component')
  expect(app.length).toEqual(1)
});
