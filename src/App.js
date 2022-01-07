import './App.css';
import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('');
  const [guess, setGuess] = useState(-1);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);


  function handleSubmit(e) {
    e.preventDefault();
    const number = Number(text);
    if (!isNaN(number)) {
      setGuess(number);
    }
    
  }

  function onChange(event) {
    setText(event.target.value);
  }

  function reset(){
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setGuess(-1);
    setText('');
  }

  return (
    <div className="App">
      <h1>Guess the number</h1>
      <form onSubmit={handleSubmit}>
      <label for='guess-number'>Guess a number between 1 and 10</label>
      <input id='guess-number' value={text} onChange={onChange}/>
      <button >Guess</button>
      </form>
      <button onClick={reset}>Reset</button>
      {guess === randomNumber && <h2> You guessed right</h2>}
      {guess < randomNumber && <h2> Number too low</h2>}
      {guess > randomNumber && <h2> Number too high</h2>}
    
    </div>
  );
}

export default App;
