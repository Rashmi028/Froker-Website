import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
function App() {

  return (
   <>
    <Header/>  
    <div className='body'>
      <Newsletter/>
    </div>
    <Footer/>
  </>
  )
}

export default App
