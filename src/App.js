import logo from './logo.svg';
import './App.css';

function doWork() {
  fetch("api/StaticTrigger1?code=7xo8ExWeo6QZ2n1Pg9ApzzoB-P1clp8ExroFSDOpC70zAzFuktM1YQ==").then(async(result)=> {
    document.getElementById("content").innerHTML = await result.text()
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          https://ashy-forest-02c92b810.1.azurestaticapps.net/api/StaticTrigger1?code=7xo8ExWeo6QZ2n1Pg9ApzzoB-P1clp8ExroFSDOpC70zAzFuktM1YQ==
        </p>
        <button onClick={()=> doWork()}>Click Me</button>
        <div id="content">
          
        </div>
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
