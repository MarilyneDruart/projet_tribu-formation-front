import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleInscriptionForm, closeInscriptionForm } from '../../actions/inscriptionForm';
import { toggleLoginForm, closeLoginForm, logout } from '../../actions/loginForm';
import NewAccountForm from '../NewAccountForm/NewAccountForm';
import LoginForm from '../LoginForm/LoginForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';
import slogan from '../../assets/images/slogan.png';

function Header() {
  const dispatch = useDispatch();
  const inscriptionFormIsDisplayed = useSelector(
    (state) => state.inscriptionForm.inscriptionFormIsDisplayed,
  );
  const loginFormIsDisplayed = useSelector((state) => state.user.loginFormIsDisplayed);
  const logged = useSelector((state) => state.user.logged);

  return (

    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo Tribu" />
      </Link>
      <img src={slogan} className="header_title" alt="Slogan Tribu" />
      <div className="header_buttons">
        {logged && (
          <>
            <Link to="/profil/5">
              <button
                type="button"
                className="header_profile-button"
                onClick={() => { }}
              >
                Mon profil
              </button>
            </Link>

            <button
              type="button"
              className="header_disconnect-button"
              onClick={() => {
                localStorage.removeItem('user');
                dispatch(logout());
              }}
            >
              Déconnexion
            </button>
          </>
        )}
        {!logged && (
          <>
            <button
              type="button"
              className="header_connexion-button"
              onClick={() => {
                dispatch(closeInscriptionForm());
                dispatch(toggleLoginForm());
              }}
            >
              Connexion
            </button>

            <button
              type="button"
              className="header_inscription-button"
              onClick={() => {
                dispatch(closeLoginForm());
                dispatch(toggleInscriptionForm());
              }}
            >
              Inscription
            </button>
          </>
        )}
      </div>
      {inscriptionFormIsDisplayed && <NewAccountForm />}
      {loginFormIsDisplayed && <LoginForm />}

    </div>
  );
}

export default Header;
