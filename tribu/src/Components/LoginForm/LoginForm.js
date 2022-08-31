/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

// Imports locaux
import '../../styles/styles.scss';
import {
  closeLoginForm,
  setToken,
} from '../../actions/loginForm';
import { openInscriptionForm } from '../../actions/inscriptionForm';
import { fetchUser } from '../../actions/user';

// Validation pattern of the user datas
const validationSchema = yup.object({
  username: yup
    .string()
    .email('L\'email est invalide')
    .required('L\'email est obligatoire'),
  password: yup
    .string()
    .required('Le mot de passe est obligatoire'),
}).required();

function LoginForm() {
  // const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    axios
      .post('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/login_check', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem('user', JSON.stringify({
          token,
        }));
        dispatch(closeLoginForm());
        dispatch(setToken(token));
        dispatch(fetchUser());
        toast('Success');
        reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate('/');
      });
  };

  return (
    <div className="Login">
      <h1 className="Login_title">
        Connecte-toi à la tribu
        <button
          className="Login_button"
          type="button"
          onClick={() => dispatch(closeLoginForm())}
        >
          X
        </button>
      </h1>
      <form
        className="Login_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('username')}
          className="Login_field"
          type="email"
          placeholder="Ton email"
        />
        <p className="Login_error-message">{errors.username?.message}</p>

        <input
          {...register('password')}
          className="Login_field"
          type="password"
          placeholder="Ton mot de passe"
        />
        <p className="Login_error-message">{errors.password?.message}</p>

        <input className="Login_submit" value="Envoyer" type="submit" />
      </form>

      <p className="inscription">
        Tu ne fais pas encore parti de la tribu ?
        <button
          type="button"
          className="inscription_link"
          onClick={() => {
            dispatch(openInscriptionForm());
            dispatch(closeLoginForm());
          }}
        >
          Inscris-toi
        </button>
      </p>

    </div>
  );
}

export default LoginForm;
