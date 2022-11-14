import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Code from './Components/Code/Code';


function App() {
  return (
    <div className="App">
    <Router>

      <Routes>
      <Route path='/' element={<Code/>}/>
      <Route path='/menu' element={<Menu/>}/>
      

      </Routes>

      </Router>

    </div>
  );
}

export default App;
