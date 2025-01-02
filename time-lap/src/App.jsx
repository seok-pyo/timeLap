import './App.css';
import AsyncStateExample from './AsyncTest.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <div id='app'>
        <h1>Hello</h1>
        <Timer />
      </div>
      <AsyncStateExample />
    </>
  );
}

export default App;
