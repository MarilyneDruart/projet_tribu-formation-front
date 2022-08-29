/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Imports locaux
import '../../styles/styles.scss';
import { closeInscriptionForm } from '../../actions/inscriptionForm';
import { openLoginForm } from '../../actions/loginForm';

// Validation pattern of the user datas
const validationSchema = yup.object({
  firstname: yup
    .string()
    .trim()
    .min(3, 'Trop court !')
    .max(30, 'Trop long !')
    .required('Le prénom est obligatoire'),
  lastname: yup
    .string()
    .trim()
    .min(3, 'Trop court !')
    .max(30, 'Trop long !')
    .required('Le nom est obligatoire'),
  city: yup
    .string()
    .required('La ville est requise'),
  email: yup
    .string()
    .email('L\'email est invalide')
    .required('L\'email est obligatoire'),
  // avatar: yup.string(),
  presentation: yup.string(),
  password: yup
    .string()
    .required('Le mot de passe est obligatoire')
    .matches(/([0-9])/, 'Le mot de passe doit contenir au moins un chiffre')
    .min(8, 'Le mot de passe doit contenir au minimum 8 caractères'),
  passwordConfirm: yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([yup.ref('password'), null], 'Le mot de passe ne correspond pas'),

}).required();

function NewAccountForm() {
  const dispatch = useDispatch();
  const citiesList = useSelector((state) => state.cities.list);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      firstname: '',
      lastname: '',
      city: '',
      email: '',
      // avatar: '',
      presentation: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => {
    axios
      .post('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/users', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Votre compte a été créé');
        dispatch(closeInscriptionForm());
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  return (
    <div className="new-account">
      <h1 className="new-account_title">
        Rejoins la tribu !
        <button
          className="new-account_button"
          type="button"
          onClick={() => dispatch(closeInscriptionForm())}
        >
          X
        </button>
      </h1>
      <form
        className="new-account_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('firstname')}
          className="new-account_field"
          type="text"
          placeholder="Ton prénom"
        />
        <p className="new-account_error-message">{errors.firstname?.message}</p>

        <input
          {...register('lastname')}
          className="new-account_field"
          type="text"
          placeholder="Ton nom"
        />
        <p className="new-account_error-message">{errors.lastname?.message}</p>

        <select
          {...register('city')}
          className="new-account_field"
        >
          <option value="">Choisis ta ville</option>
          {citiesList.map((city) => (
            <option key={city.id} value={`${city.id}`}>{city.name}</option>))}
        </select>
        <p className="new-account_error-message">{errors.city?.message}</p>

        <input
          {...register('email')}
          className="new-account_field"
          type="email"
          placeholder="Ton email"
        />
        <p className="new-account_error-message">{errors.email?.message}</p>

        <textarea
          {...register('presentation')}
          className="new-account_field"
          placeholder="Parle-nous de toi"
          rows="3"
        />
        <p className="new-account_error-message">{errors.presentation?.message}</p>

        <input
          {...register('password')}
          className="new-account_field"
          type="password"
          placeholder="Ton mot de passe"
        />
        <p className="new-account_error-message">{errors.password?.message}</p>

        <input
          {...register('passwordConfirm')}
          className="new-account_field"
          type="password"
          placeholder="Confirme ton mot de passe"
        />
        <p className="new-account_error-message">{errors.passwordConfirm?.message}</p>

        {/* <input
          {...register('avatar')}
          className="new-account_avatar"
          name="avatar"
          type="file"
          placeholder="Avatar"
          accept="image/png, image/jpeg"
        />
        <p className="new-account_error-message">{errors.avatar?.message}</p> */}

        <input className="new-account_submit" type="submit" />
      </form>

      <p className="login">
        Tu fais déjà parti de la tribu ?
        <button
          type="button"
          className="login_link"
          onClick={() => {
            dispatch(openLoginForm());
            dispatch(closeInscriptionForm());
          }}
        >
          Connecte-toi
        </button>
      </p>

    </div>
  );
}

export default NewAccountForm;
