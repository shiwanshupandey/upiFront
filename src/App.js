import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form'; 
import Formpage2 from './Components/Formpage2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} /> {/* This is your route to the home page */}
          <Route path="/page2" element={<Formpage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
