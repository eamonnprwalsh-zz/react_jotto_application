import logo from "./logo.svg";
import "./App.css";
import Congrats from "./component/Congrats/Congrats";
import GuessedWords from "./component/GuessedWords/GuessedWords";
import Input from "./component/Input/Input";

function App(props) {

  const {secretWord, success, guessedWords} = props;

  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
      <Input success={success} secretWord={secretWord} />
    </div>
  );
}

export default App;
