import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleinscriptionForm } from '../../actions/inscriptionForm';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const dispatch = useDispatch();
  const isDisplayed = useSelector((state) => state.inscriptionForm.isDisplayed);

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo Tribu" />
      </Link>
      <h1 className="header_title">Meet, Visit, Share it, Repeat</h1>
      <button
        type="button"
        className="header_connexion-button"
        onClick={() => dispatch(toggleinscriptionForm())}
      >
        Connexion
      </button>
      <button
        type="button"
        className="header_inscription-button"
        onClick={() => dispatch(toggleinscriptionForm())}
      >
        Inscription
      </button>

      {isDisplayed && <NewAccountForm />}

    </div>
  );
}

export default Header;
