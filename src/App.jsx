import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import POSMain from './components/mainPage';
import Order from './components/order';


function App() {
  
  return (
   
      <div className="h-[100vh] w-full">
        <Dashboard />
        
        <POSMain />

        <Order />
      </div>
     
    
  )
}

export default App;
