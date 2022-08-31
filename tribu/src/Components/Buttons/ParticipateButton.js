/* eslint-disable */
import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

import '../../styles/styles.scss';

function ParticipateButton() {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="ParticipateButton">
      <button
        type="button"
        className="ParticipateButton_button"
        onClick={() => {
          {!logged ? toast.error('Connecte-toi à la Tribu pour participer.') : toast.success('Plus on est de fous, plus on rit !')}
        }}
      >
        Je participe !
      </button>
    </div>
  );
}

export default ParticipateButton;
