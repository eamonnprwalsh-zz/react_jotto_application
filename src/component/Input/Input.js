import PropTypes from "prop-types"; // ES6
import React from "react";

function Input({ success, secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState();

  console.log(success);
  console.log('secret word ' + secretWord);

  if(success) {
    return <div data-test="input-component" className="input-component"></div>
  }

  return (
    <div data-test="input-component" className="input-component">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mc-sm-3"
          onChange={(event) => setCurrentGuess(event.target.value)}
          value={currentGuess}
          placeholder="Please enter a guess"
        ></input>
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            // Update guessed words
            // Check against secret words and update if success
            setCurrentGuess("");
          }}
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
