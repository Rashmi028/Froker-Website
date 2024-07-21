import React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from "./components/MainContent";
import Body2 from './components/Body2';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Newsletter from './components/Newsletter';

export default function BlogPage() {
  const { id } = useParams(); // get the blog ID from the URL

  return (
    <MainContent/>
  );
}