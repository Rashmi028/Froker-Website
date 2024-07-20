import React from "react";
import './blogpage.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import MainContent from "./components/MainContent";
import Body2 from "./components/Body2";
import {Link} from 'react-router-dom'

export default function BlogPage(){
    return(
        <>
        <div className="body">
        <MainContent/>
        <Body2 post="Popular Post"/>
        <Newsletter/>
        </div>
        </>
    )
}