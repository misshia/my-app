import logo from './logo.svg';
import './App.css';
import Weather from "./Weather"
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <CircleLoader color={`aquamarine`} loading={`true`} css={``} size={50} /> 
          <Weather />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
