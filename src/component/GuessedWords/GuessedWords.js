import PropTypes from "prop-types"; // ES6
import { useState } from "react";

function GuessedWords(props) {
  console.log(props);
  const [guessedWords, setGuessedWords] = useState([]);

  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guessed-word-instructions">Please guess a Word</span>
    );
  } else {
    const guessWordsRow = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>word.guessedWord</td>
        <td>word.letterMatchCount</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRow}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div
      data-test="guessed-words-component"
      className="guessed-words-component"
    >
      {contents}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
