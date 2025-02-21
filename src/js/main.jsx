import React from 'react'
import ReactDOM from 'react-dom/client'
import Component1 from './components/Component1';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"



// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Component1/>
    
  </React.StrictMode>,
)
