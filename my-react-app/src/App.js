import './App.css';

import { name, age } from "./w3school/person"
import message from "./w3school/message"

function App() {
  return (
    <div className="App">
      <h1>Hello World, my name is {name}, I'm {age} years old</h1>
      <h1>Hello World, {message()} </h1>


    </div>
  );
}

export default App;
