import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './Components/Invoices.js';
import Home from './Components/Home.js'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path ='/' Component={Home}></Route>
        <Route path='invoices' Component={Invoices}></Route>
      </Routes>
    </div>
  );
}

export default App;
