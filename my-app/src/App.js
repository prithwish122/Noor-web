import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Task from './components/Task';
import About from './components/About';

function App() {
  return (
    <>
    <div className='bg'>
      <Router>
        <Navbar/>
        <Hero/>
        <Task/>
        {/* <div className='About'> */}
          <About/>
        {/* </div> */}
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
      </div>   
    </>
  );
}

export default App;
