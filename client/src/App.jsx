import { useState } from 'react';
import axios  from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({ inp: "", shortenedLink: "" })
  function handleInput (e) {
    setState({...state, inp: e.target.value})
    
  }
  function handleClick () {
    console.log(state)
    axios.post("http://localhost:3000/shorten-link", {fullLink: state.inp
  }).then(res => setState({...state, shortenedLink: res.data})).catch(e => console.log(e))
  }

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__form">
          <input type="text" className="main__inp" placeholder="url" onInput={handleInput}/>
          <button className="main__btn" onClick={handleClick}>Shorten</button>
          {state.shortenedLink && <a target="_blank" rel="noreferrer" className="main__res" href={state.shortenedLink}> {state.shortenedLink}</a>}
        </div>
      </div>
    </main>
  );
}

export default App;
