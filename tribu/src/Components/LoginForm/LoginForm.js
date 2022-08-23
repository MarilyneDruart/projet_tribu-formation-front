/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Imports locaux
import '../../styles/styles.scss';
import {
  closeLoginForm,
  login,
  // LOGOUT,
  setUser,
} from '../../actions/loginForm';
import { openInscriptionForm } from '../../actions/inscriptionForm';

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
  // const { username, password } = useSelector((state) => state.user.loginForm);
  const dispatch = useDispatch();

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
    dispatch(login());

    axios
      .post('http://svitlana-burlak-kuzoski.vpnuser.lan:8000/api/login_check', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const { pseudo, token } = response.data;
        console.log(response);

        dispatch(setUser(pseudo, token));

        // localStorage.setItem('user', JSON.stringify({
        //   pseudo,
        //   token,
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
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
        <p className="Login_error-message">{errors.email?.message}</p>

        <input
          {...register('password')}
          className="Login_field"
          type="password"
          placeholder="Ton mot de passe"
        />
        <p className="Login_error-message">{errors.password?.message}</p>

        <input className="Login_submit" type="submit" />
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
