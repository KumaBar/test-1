import React from 'react';
import './App.css';
import { CurrentYear } from './components/CurrentYear';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { Route, Routes } from 'react-router';
import { Navigation } from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<CurrentYear />} />
        <Route path="/button" element={<Button />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div >
  );
}

export default App;
