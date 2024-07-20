import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BlogPage from './BlogPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route  path='/' element={<App/>}/>
         <Route  path='/blogs' element={<App/>}/>
         <Route  path='/blogpage' element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
)
