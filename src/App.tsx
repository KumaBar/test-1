import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { Navigation } from './components/Navigation';
import { YearPage } from './pages/YearPage';
import { ButtonPage } from './pages/ButtonPage';
import { FormPage } from './pages/FormPage';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<YearPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div >
  );
}

export default App;
