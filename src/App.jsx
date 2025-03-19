<<<<<<< HEAD
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
=======
import "./App.css";
import POSDashboard from "./components/reports";

function App() {
  return (
    <div className="h-[100vh] w-full">
      <POSDashboard />
    </div>
  );
>>>>>>> fae7a9e92eeda99fcb8c0320e76f1aad05d659cf
}

export default App;
