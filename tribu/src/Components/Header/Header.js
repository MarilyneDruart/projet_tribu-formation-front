import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleInscriptionForm } from '../../actions/actions';
import NewAccountForm from '../NewAccountForm/NewAccountForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const isDisplayed = useSelector((state) => state.isDisplayed);
  // console.log(isDisplayed);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <img src={logo} className="header_logo" alt="Logo Tribu" />
      <h1 className="header_title">Meet, Visit, Share it, Repeat</h1>
      <button
        type="button"
        className="header_connection-button"
        onClick={() => dispatch(toggleInscriptionForm())}
      >
        Inscription
      </button>

      {isDisplayed && <NewAccountForm />}

    </div>
  );
}

export default Header;
