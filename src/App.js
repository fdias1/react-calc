import React from 'react';
import './styles.css'
import Calculadora from './components/Calculadora'

function App() {
  return (
    <React.Fragment>
      <div id="contend">
        <h1 className='title'>React.js Calc</h1>
        <Calculadora/>
      </div>
      <footer>
        <a href='http://github.com/fdias1/react-calc' target='blank'>
          GitHub Page
        </a>
      </footer>
    </React.Fragment>
  );
}
export default App;
