import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/header.jsx'
import Index from './components/index.jsx'
import Login from './components/login.jsx'
import DashBoard from './components/dashboard.jsx'
import Registro from './components/registro.jsx';
import './App.css'

function App() {

  return (
    
    <>
    
    
     <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Index />}/>

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashBoard />} />

        <Route path='/registro' element={<Registro />}/>

      </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App
