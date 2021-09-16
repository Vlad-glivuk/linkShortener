import { useState } from 'react';
import axios  from 'axios';
import './App.css';
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [state, setState] = useState({ inp: "", shortenedLink: "" })
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  
  function handleInput (e) {
    setState({...state, inp: e.target.value})
  }

  function handleClick () {
    axios
      .post("http://localhost:3000/shorten-link", {fullLink: state.inp})
      .then(res => setState({...state, shortenedLink: res.data}))
      .catch(e => console.log(e))
  }

  function changeTheme () {
    setIsDarkMode(() => true)
  }

  return (
    <main className={isDarkMode ? "main_dark" : "main"}>
      <div className="main__theme-toggle">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          onClick={changeTheme}
          size={80} />
      </div>
      <div className="main__container">
        <div className="main__form">
          <div className="main__top-panel"><input type="text" className="main__inp" placeholder="url" onInput={handleInput}/>
          <button className="main__btn" onClick={handleClick}>Shorten</button></div>
          <div className="main__bottom-panel">{state.shortenedLink && <a target="_blank" rel="noreferrer" className="main__res" href={state.shortenedLink}> {state.shortenedLink}</a>}
          <button className={state.shortenedLink ? "main__copy" : "main__copy-hidden"} onClick={() => {navigator.clipboard.writeText(state.shortenedLink)}}>Copy</button></div>
        </div>
      </div>
    </main>
  );
}

export default App;