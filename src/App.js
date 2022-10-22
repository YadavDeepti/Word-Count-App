//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

   const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
          msg: message,
          type: type
    })

    setTimeout(() => {
          setAlert(null);
    },3000);
  };

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#5e5e5e';
     // showAlert("Dark mode is Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     // showAlert("Light mode is Enabled","success")
    }
  }
  return (
    <>
    
{/*<Navbar title="Deepti" about="About Me"/>  */}
{/*<Navbar/>*/}
<Router>
<Navbar title="WC" mode={mode} toggleMode={toggleMode}/>

<Alert alert = {alert}/>

<div className="container my-2">
  
  <Routes>
          <Route exact path="/about" element = {<About mode ={mode}/>}>
            </Route>
          <Route exact path="/" element = {<Textform showAlert = {showAlert}heading="Enter Some Text" mode={mode}/>}>
          </Route>
        </Routes>
        </div>
  </Router>




{/*<About/>*/}

</>
  );
}

export default App;
