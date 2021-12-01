import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
