import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main.jsx';
import About from './pages/About/About.jsx';
import { Booklist } from './components/Booklist.jsx';
import BookDetails from './components/BookDetails.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path='/' element = {<Main />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<Booklist />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
    </Routes>
  </BrowserRouter>
);

