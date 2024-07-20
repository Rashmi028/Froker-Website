import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Body1 from './components/Body1'
import Body2 from './components/Body2'
function App() {

  return (
   <>
    <Header/>  
    <div className='body'>
      <Body1/>
      <Body2/>
      <Newsletter/>
    </div>
    <Footer/>
  </>
  )
}

export default App
