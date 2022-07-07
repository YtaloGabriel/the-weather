import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './GlobalContext';
import Header from './components/Header/Header';
import SearchMain from './components/Search/SearchMain';

const App = () => {
  return (
    <BrowserRouter>
      <section className="App">
        <GlobalStorage>
          <Header />
          <Routes>
            <Route path="/search" element={<SearchMain />} />
          </Routes>
        </GlobalStorage>
      </section>
    </BrowserRouter>
  );
};

export default App;
