import PropTypes from "prop-types"; // ES6
import React from "react";

function Input({ success, secretWord }) {

  const [currentGuess, setCurrentGuess] = React.useState('');

  if(success) {
    return <div data-test="input-component" className="input-component"></div>
  }

  const onChangeInput = (event) => {
    setCurrentGuess(event.target.value)
  }
  
  const onClickSubmitButton = (event) => {
    event.preventDefault();
    // Update guessed words
    // Check against secret words and update if success
    setCurrentGuess("");
  }
  

  return (
    <div data-test="input-component" className="input-component">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mc-sm-3"
          onChange={onChangeInput}
          value={currentGuess}
          placeholder="Please enter a guess"
        ></input>
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={onClickSubmitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
};

export default Input;
