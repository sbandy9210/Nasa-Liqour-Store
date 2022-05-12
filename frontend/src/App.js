import './styles/app.css'
import React, { useState, UseEffect } from 'react'
import { Route, Routes } from 'react-router-dom' 
import Client from './services/api'
import SignIn from './pages/SignIn'
import Register from './pages/Register'


function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>NASA LIQUOR STORE</h1>
      </div>
        <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
       
    </div>
  );
}

export default App;
