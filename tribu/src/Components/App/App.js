import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../actions/cities';

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
// import { fetchInterests } from '../../actions/interests';
// import CityInterests from '../CityPage/CityInterests/CityInterests';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cities.loading);

  useEffect(() => {
    dispatch(fetchCities());
  }, [Home]);

  // useEffect(() => {
  //   dispatch(fetchInterests());
  // }, [CityInterests]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<CityPage />} />
        <Route path="/:slug/:id" element={<Interest />} />
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
