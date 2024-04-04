import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HandinPage from './Handin';
import Shop from './Shop'; 

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} exact />
        <Route path="/handin" element={<HandinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
