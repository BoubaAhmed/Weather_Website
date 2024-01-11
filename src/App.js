import React, { useState } from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound/NotFound';
import CurrentData from './Components/CurrentData/CurrentData';


export default function App() {
  return (
    <>
      <Routes>
          <Route exact path="/weather-app-react" element={<Home/>} />
          <Route exact path="/current" element={<CurrentData/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </>
  )
}
