/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Imports locaux
import '../../styles/styles.scss';

// Validation pattern of the user datas
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(3, 'Trop court !')
    .max(30, 'Trop long !')
    .required('Le prénom est obligatoire'),
  lastName: yup
    .string()
    .trim()
    .min(3, 'Trop court !')
    .max(30, 'Trop long !')
    .required('Le nom est obligatoire'),
  city: yup
    .string()
    .trim()
    .required('La ville est requise'),
  email: yup
    .string()
    .email('L\'email est invalide')
    .required('L\'email est obligatoire'),
  avatar: yup.string(),
  description: yup.string(),
  password: yup
    .string()
    .required('Le mot de passe est obligatoire')
    .matches(/([0-9])/, 'Le mot de passe doit contenir au moins un entier')
    .min(8, 'Le mot de passe doit contenir au minimum 8 caractères'),
  passwordConfirm: yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([yup.ref('password'), null], 'Le mot de passe ne correspond pas'),

}).required();

function NewAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      city: '',
      email: '',
      avatar: '',
      description: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="new-account">
      <h1 className="new-account_title">
        Rejoins la tribu !
        <button className="new-account_button" type="button">X</button>
      </h1>
      <form
        className="new-account_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('firstName')}
          className="new-account_field"
          type="text"
          placeholder="Ton prénom"
        />
        <p className="new-account_error-message">{errors.firstName?.message}</p>

        <input
          {...register('lastName')}
          className="new-account_field"
          type="text"
          placeholder="Ton nom"
        />
        <p className="new-account_error-message">{errors.lastName?.message}</p>

        <input
          {...register('city')}
          className="new-account_field"
          type="text"
          placeholder="Ta ville"
        />
        <p className="new-account_error-message">{errors.city?.message}</p>

        <input
          {...register('email')}
          className="new-account_field"
          type="email"
          placeholder="Ton email"
        />
        <p className="new-account_error-message">{errors.email?.message}</p>

        <textarea
          {...register('description')}
          className="new-account_field"
          placeholder="Parle-nous de toi"
          rows="3"
        />
        <p className="new-account_error-message">{errors.description?.message}</p>

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

        <input
          {...register('avatar')}
          className="new-account_avatar"
          name="avatar"
          type="file"
          placeholder="Avatar"
          accept="image/png, image/jpeg"
        />
        <p className="new-account_error-message">{errors.avatar?.message}</p>

        <input className="new-account_submit" type="submit" />
      </form>
    </div>
  );
}

export default NewAccountForm;
