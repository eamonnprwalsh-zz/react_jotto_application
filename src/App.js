import logo from "./logo.svg";
import "./App.css";
import Congrats from "./component/Congrats/Congrats";
import GuessedWords from "./component/GuessedWords/GuessedWords";
import Input from "./component/Input/Input";
import { getSecretWord } from "./actions";
import { useState, useEffect } from "react";

function App(props) {

  //const [secretWord, setSecretWord] = useState('')

  useEffect(() => {
    console.log("in use effect... ");
    getSecretWord();
    //setSecretWord(getSecretWord());
    //getSecretWord().then((result) => {
    //  setSecretWord(result);
    //});
  }, []);

  
  const secretWord = "party";
  const success = false;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "cake", letterMatchCount: 2 },
  ];
  

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
