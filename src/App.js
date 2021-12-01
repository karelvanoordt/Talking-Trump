import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Trump from './components/trump'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Trump />} />
        {/* <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
