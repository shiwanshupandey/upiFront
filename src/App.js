import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form'; 
// import Formpage2 from './Components/Formpage2';
import FormIntro from './Components/FormIntro.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormIntro/>}/>
          <Route path="/page1" element={<Form />} /> 
          {/* <Route path="/page2" element={<Formpage2 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
