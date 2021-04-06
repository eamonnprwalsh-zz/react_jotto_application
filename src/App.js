import logo from "./logo.svg";
import "./App.css";
import Congrats from "./component/Congrats/Congrats";
import GuessedWords from "./component/GuessedWords/GuessedWords";
import Input from "./component/Input/Input";

function App() {
  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "shop", letterMatchCount: 2 },
        ]}
      />
      <Input success={false} secretWord='cake'/>
    </div>
  );
}

export default App;
