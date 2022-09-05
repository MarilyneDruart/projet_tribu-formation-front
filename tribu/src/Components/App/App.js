import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  // useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
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

import '../../fonts/Nunito.ttf';
import '../../fonts/BilingualSerifFont.ttf';

import '../../styles/styles.scss';
import { fetchInterests } from '../../actions/interests';
import { fetchCategories } from '../../actions/categories';
import { fetchUser } from '../../actions/user';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const citiesLoading = useSelector((state) => state.cities.loading);
  const logged = useSelector((state) => state.user.logged);

  const loggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // if logged, save token in user state
    if (loggedUser) {
      dispatch(setToken(loggedUser.items.token));
    }

    // Fetching all useful datas from database
    dispatch(fetchCities());
    dispatch((fetchInterests()));
    dispatch((fetchCategories()));
  }, []);

  useEffect(() => {
    // when url is changing, redirecting to the top of the page
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  // useEffect(() => {
  //   if (loggedUser && loggedUser.items.exp < (Date.now())) {
  //     localStorage.removeItem('user');
  //     console.log(loggedUser.items.exp);
  //     dispatch(logout());
  //     navigate('/');
  //   }
  // }, [location]);

  if (logged) {
    dispatch((fetchUser()));
  }

  if (citiesLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
          style: {
            padding: '20px',
          },
          success: {
            style: {
              background: '#b6f8c4',
            },
          },
          error: {
            style: {
              background: '#ffb7b7',
            },
          },
        }}
      />
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
