/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Imports locaux
import '../../styles/styles.scss';
import { closeInterestForm } from '../../actions/interests';

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(3, 'Trop court !')
    .max(40, 'Trop long !')
    .required('C\'est mieux avec un titre'),
  image: yup
    .string()
    .trim(),
  content: yup
    .string()
    .trim()
    .required('Donne-nous ton avis !'),
  date: yup
    .date(),
  category: yup
    .string()
    .required('Sélectionne au moins une catégorie'),
  address: yup
    .string(),
}).required();

function NewInterestForm() {
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
    console.log(data);

    axios
      .post('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/users', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        console.log('Votre compte a été créé');
        dispatch(closeInterestForm());
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  return (
    <div className="new-interest">
      <h1 className="new-interest_title">
        Partage-nous ton intérêt !
        <button
          className="new-interest_button"
          type="button"
          onClick={() => dispatch(closeInterestForm())}
        >
          X
        </button>
      </h1>
      <form
        className="new-interest_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('title')}
          className="new-interest_field"
          type="text"
          placeholder="Donne un titre à ton astuce"
        />
        <p className="new-interest_error-message">{errors.firstname?.message}</p>

        <input
          {...register('lastname')}
          className="new-interest_field"
          type="text"
          placeholder="Ton nom"
        />
        <p className="new-interest_error-message">{errors.lastname?.message}</p>

        <input
          {...register('city')}
          className="new-interest_field"
          type="text"
          placeholder="Ta ville"
        />
        <p className="new-interest_error-message">{errors.city?.message}</p>

        <input
          {...register('email')}
          className="new-interest_field"
          type="email"
          placeholder="Ton email"
        />
        <p className="new-interest_error-message">{errors.email?.message}</p>

        <textarea
          {...register('presentation')}
          className="new-interest_field"
          placeholder="Parle-nous de toi"
          rows="3"
        />
        <p className="new-interest_error-message">{errors.presentation?.message}</p>

        <input
          {...register('password')}
          className="new-interest_field"
          type="password"
          placeholder="Ton mot de passe"
        />
        <p className="new-interest_error-message">{errors.password?.message}</p>

        <input
          {...register('passwordConfirm')}
          className="new-interest_field"
          type="password"
          placeholder="Confirme ton mot de passe"
        />
        <p className="new-interest_error-message">{errors.passwordConfirm?.message}</p>

        {/* <input
          {...register('avatar')}
          className="new-interest_avatar"
          name="avatar"
          type="file"
          placeholder="Avatar"
          accept="image/png, image/jpeg"
        />
        <p className="new-interest_error-message">{errors.avatar?.message}</p> */}

        <input className="new-interest_submit" type="submit" />
      </form>

    </div>
  );
}

export default NewInterestForm;
