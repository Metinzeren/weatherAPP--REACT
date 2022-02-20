import './App.css';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {

  // const key="59ae50e631b83a9293465056c2f3e861"
  // const url="https://api.openweathermap.org/data/2.5/"

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}    />
        <Route path='/about' exact element={<About/>}    />
      </Routes>
      <div className='footer'>
      <Link className='aboutBtn' to="/about">About</Link>
      |
      <Link className='homeBtn'  to="/">Home</Link>
      </div>
      
    </div>
  );
}

export default App;
