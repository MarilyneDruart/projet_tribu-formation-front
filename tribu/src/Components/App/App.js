import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../actions/cities';
import { setUser } from '../../actions/loginForm';

import Header from '../Header/Header';
import Home from '../Home/Home';
import CityPage from '../CityPage/CityPage';
import Footer from '../Footer/Footer';
import Contacts from '../Footer/Contacts';
import LegalNotice from '../Footer/LegalNotice';
import AboutUs from '../Footer/AboutUs';
import NotFound from '../NotFound/NotFound';
import Interest from '../Interest/Interest';
import Loading from '../Loading/Loading';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import AddPOIForm from '../AddPOIForm/AddPOIForm';

import '../../styles/styles.scss';

function App() {
  const dispatch = useDispatch();

  const citiesLoading = useSelector((state) => state.cities.loading);
  const token = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  if (citiesLoading) {
    return <Loading />;
  }

  if (token) {
    dispatch(setUser(token));
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ville/:slug" element={<CityPage />} />
        <Route path="/ville/:slug/:id" element={<Interest />} />
        <Route path="/profil/:id" element={<UserProfilePage />} />
        <Route path="/ville/:slug/ajouter" element={<AddPOIForm />} />
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
