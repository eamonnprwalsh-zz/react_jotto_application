import logo from "./logo.svg";
import "./App.css";
import Congrats from "./component/Congrats/Congrats";
import GuessedWords from "./component/GuessedWords/GuessedWords";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{guessedWord: 'train', letterMatchCount: 3},
                        {guessedWord: 'shop', letterMatchCount: 2}]}
      />
    </div>
  );
}

export default App;
