import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleinscriptionForm } from '../../actions/actions';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const dispatch = useDispatch();
  const isDisplayed = useSelector((state) => state.isDisplayed);

  return (
    <div className="header">
      <img src={logo} className="header_logo" alt="Logo Tribu" />
      <h1 className="header_title">Meet, Visit, Share it, Repeat</h1>
      <button
        type="button"
        className="header_connection-button"
        onClick={() => dispatch(toggleinscriptionForm())}
      >
        Inscription
      </button>

      {isDisplayed && <NewAccountForm />}

    </div>
  );
}

export default Header;
