import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainContent from './components/MainContent.jsx';
import Body2 from './components/Body2.jsx';
import Newsletter from './components/Newsletter.jsx';
import BlogPage from './BlogPage.jsx'
import './index.css'
import Popup from './components/Popup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(  
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route  path='/' element={<App/>}/>
         <Route  path='/blogs' element={<App/>}/>
         <Route path="/blog/:id" element={<MainContent />} />
         <Route  path='/pop' element={<Popup/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  
)
