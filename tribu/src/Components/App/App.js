import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../actions/cities';
import { setToken } from '../../actions/loginForm';

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

import '../../styles/styles.scss';
import { fetchInterests } from '../../actions/interests';
import { fetchCategories } from '../../actions/categories';
import { fetchUser } from '../../actions/user';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const citiesLoading = useSelector((state) => state.cities.loading);
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(setToken(loggedUser.token));
    }

    dispatch(fetchCities());
    dispatch((fetchInterests()));
    dispatch((fetchCategories()));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  if (logged) {
    dispatch((fetchUser()));
  }

  if (citiesLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ville/:slug" element={<CityPage />} />
        <Route path="/ville/:slug/:id" element={<Interest />} />
        {logged && <Route path="/profil/:slug" element={<UserProfilePage />} />}
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
