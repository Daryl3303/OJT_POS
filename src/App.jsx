import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import POSMain from './components/mainPage';


function App() {
  
  return (
   
      <div className="h-[100vh] w-full">
        <Dashboard />
        
        <POSMain />
      </div>
     
    
  )
}

export default App;
