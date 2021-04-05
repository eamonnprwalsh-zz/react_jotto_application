import PropTypes from "prop-types"; // ES6
import React from "react";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState();

  return (
    <div data-test="input-component" className="input-component">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mc-sm-3"
          onChange={event => setCurrentGuess(event.target.value)}
          value={currentGuess}
          placeholder="Please enter a guess"
        ></input>
        <button data-test="submit-button" 
        className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
