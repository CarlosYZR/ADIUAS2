import { useState } from 'react'
import Header from './components/header.jsx'
import Index from './components/index.jsx'
import Login from './components/login.jsx'
import DashBoard from './components/dashboard.jsx'
import './App.css'

function App() {

  const [vista, setVista] = useState('index');

  return (
    
    <>
    
      <Header />  

      {vista === 'index' && <Index cambiarVista = {setVista}/>}

      {vista === 'login' && <Login cambiarVista = {setVista}/>}

      {vista === 'dashboard' && <DashBoard cambiarVista = {setVista}/>}
    
    </>

  );
}

export default App
