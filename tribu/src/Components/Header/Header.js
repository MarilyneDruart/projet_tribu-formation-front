import React from 'react';
import { useDispatch } from 'react-redux';

import { openInscriptionForm } from '../../actions/actions';
// import NewAccountForm from '../NewAccountForm/NewAccountForm';

import '../../styles/styles.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const dispatch = useDispatch();

  // const { isDisplayed, isLogged } = useSelector((state) => state.inscriptionForm);
  // console.log(isDisplayed);
  // console.log(isLogged);

  return (
    <div className="header">
      <img src={logo} className="header_logo" alt="Logo Tribu" />
      <h1 className="header_title">Meet, Visit, Share it, Repeat</h1>
      <button
        type="button"
        className="header_connection-button"
        onClick={() => dispatch(openInscriptionForm())}
      >
        Connexion
      </button>

      {/* {isDisplayed && <NewAccountForm />} */}

      {/* {isLogged && (
        <p>Connecté !</p>
      )} */}

    </div>
  );
}

export default Header;
