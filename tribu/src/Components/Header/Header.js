import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleInscriptionForm } from '../../actions/inscriptionForm';
import { toggleLoginForm } from '../../actions/loginForm';
import NewAccountForm from '../NewAccountForm/NewAccountForm';
import LoginForm from '../LoginForm/LoginForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const dispatch = useDispatch();
  const inscriptionFormIsDisplayed = useSelector(
    (state) => state.inscriptionForm.inscriptionFormIsDisplayed,
  );
  const loginFormIsDisplayed = useSelector((state) => state.user.loginFormIsDisplayed);

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo Tribu" />
      </Link>
      <h1 className="header_title">Meet, Visit, Share it, Repeat</h1>
      <div className="header_buttons">
        <button
          type="button"
          className="header_connexion-button"
          onClick={() => dispatch(toggleLoginForm())}
        >
          Connexion
        </button>
        <button
          type="button"
          className="header_inscription-button"
          onClick={() => dispatch(toggleInscriptionForm())}
        >
          Inscription
        </button>
      </div>
      {inscriptionFormIsDisplayed && <NewAccountForm />}
      {loginFormIsDisplayed && <LoginForm />}

    </div>
  );
}

export default Header;
