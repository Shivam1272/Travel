import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Signup from './components/pages/Signup'
import Products from './components/pages/Products'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
