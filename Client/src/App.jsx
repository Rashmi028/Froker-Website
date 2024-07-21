import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Body1 from './components/Body1'
import Body2 from './components/Body2'
import {Link} from 'react-router-dom'
function App() {

  return (
   <> 
    <div className='body'>
      <Body1/>
      <Body2/>
      <Newsletter/>
    </div>
  </>
  
  )
}

export default App
