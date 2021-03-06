import './styles/app.css'
import React, { useState, UseEffect } from 'react'
import { Route, Routes } from 'react-router-dom' 
// import Client from './services/api'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Nav from './components/Nav'
import Home from './pages/Home'
import Search from './pages/Search'


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <header className='navBar'>
      
        <Nav />
        </header>

      </div>
        <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
        
       
    </div>
  );
}

export default App;
