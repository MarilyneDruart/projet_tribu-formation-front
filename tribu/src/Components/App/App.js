import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import CityPage from '../CityPage/CityPage';
import Footer from '../Footer/Footer';
import Contacts from '../Footer/Contacts';
import LegalNotice from '../Footer/LegalNotice';
import AboutUs from '../Footer/AboutUs';
import NotFound from '../NotFound/NotFound';
import Interest from '../Interest/Interest';
import LoginForm from '../LoginForm/LoginForm';
import NewAccountForm from '../NewAccountForm/NewAccountForm';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import AddPOIForm from '../AddPOIForm/AddPOIForm';

import '../../styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<CityPage />} />
        <Route path="/:slug/:id" element={<Interest />} />
        <Route path="/connexion" element={<LoginForm />} />
        <Route path="/inscription" element={<NewAccountForm />} />
        <Route path="/profil/:id" element={<UserProfilePage />} />
        <Route path="/:slug/ajouter" element={<AddPOIForm />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/a-propos" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
