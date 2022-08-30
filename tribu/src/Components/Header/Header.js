import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { toggleInscriptionForm, closeInscriptionForm } from '../../actions/inscriptionForm';
import { toggleLoginForm, closeLoginForm, logout } from '../../actions/loginForm';
import { toggleInterestForm } from '../../actions/interests';
import NewAccountForm from '../NewAccountForm/NewAccountForm';
import LoginForm from '../LoginForm/LoginForm';
import NewInterestForm from '../NewInterestForm/NewInterestForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';
import slogan from '../../assets/images/slogan.png';

function Header() {
  const dispatch = useDispatch();
  const inscriptionFormIsDisplayed = useSelector(
    (state) => state.inscriptionForm.inscriptionFormIsDisplayed,
  );
  const loginFormIsDisplayed = useSelector((state) => state.user.loginFormIsDisplayed);
  const interestFormIsDisplayed = useSelector((state) => state.interests.interestFormIsDisplayed);
  const { lastname, firstname, logged } = useSelector((state) => state.user);
  const firstnameURL = firstname.toLowerCase();
  const lastnameURL = lastname.toLowerCase();

  const navigate = useNavigate();

  return (

    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo Tribu" />
      </Link>
      <Link to="/">
        <img src={slogan} className="header_title" alt="Slogan Tribu" />
      </Link>
      <div className="header_buttons">
        {logged && (
          <>
            <Link to={`/profil/${firstnameURL}-${lastnameURL}`}>
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
              className="header_icon-button header_add-button"
              onClick={() => { dispatch(toggleInterestForm()); }}
            >
              <div className="header_add-icon" />
              <div className="header_button-text">Partage un intérêt</div>
            </button>

            <button
              type="button"
              className="header_disconnect-button"
              onClick={() => {
                localStorage.removeItem('user');
                dispatch(logout());
                navigate('/');
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
      {interestFormIsDisplayed && <NewInterestForm />}

    </div>
  );
}

export default Header;
