import React from "react";
import './blogpage.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import MainContent from "./components/MainContent";
export default function BlogPage(){
    return(
        <>
        <Header/>
        <MainContent/>
        <Footer/>
        </>
    )
}