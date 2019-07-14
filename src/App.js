import React,{useRef} from 'react';
import Home from './views/Home';
import './App.scss';

function App() {
  const homeRef = useRef(null)
  return (
    <div className="App" ref={homeRef.current} data-home-type='primary'>
      {console.log(homeRef.current)}
      <Home />
    </div>
  );
}

export default App;
