import PropTypes from 'prop-types'; // ES6
import { useState } from "react";


function GuessedWords(props) {

  const [guessedWords, setGuessedWords] = useState([]);

  let showGuessedWords;
  if(props.guessedWords.length === 0){
    showGuessedWords = <span data-test='guessed-word-instructions'>Please guess a Word</span>
  } else {
    showGuessedWords = <span data-test='guessed-word-instructions'>Other message</span>
  }

  return (
    <div data-test="guessed-words-component" className="guessed-words-component">
        {showGuessedWords}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords : PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords;
