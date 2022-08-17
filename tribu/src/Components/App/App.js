import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import MainImage from '../MainImage/MainImage';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import '../../styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<MainImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
