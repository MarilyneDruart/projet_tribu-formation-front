/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

// Imports locaux
import '../../styles/styles.scss';
import { closeInterestForm, fetchInterests } from '../../actions/interests';
import { fetchUser } from '../../actions/user';

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
  // date: yup
  //   .string()
  //   .nullable(),
  category: yup
    .array()
    .required('Sélectionne au moins une catégorie'),
  address: yup
    .string()
    .required('La localisation de ton lieu secret pour en profiter'),
}).required();

function NewInterestForm() {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categories.list);
  const { cityId, id } = useSelector((state) => state.user);

  const user = id;
  const city = cityId;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      image: '',
      content: '',
      // date: '',
      category: [],
      address: '',
    },
  });

  const onSubmit = (data) => {
    // converting string categories into integers id categories
    const category = data.category.map((categoryToSend) => Number(categoryToSend));

    const dataToSend = {
      ...data,
      category,
      city,
      user,
    };

    axios
      .post('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/posts', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(closeInterestForm());
        // fetching interests list when adding a new element
        // in order to display this new element dynamically
        dispatch(fetchInterests());
        dispatch(fetchUser());
        toast.success('Ton intérêt a bien été créé !');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Ton intérêt n\'a pas pu être créé !');
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
          <ion-icon name="close-outline" />
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
          placeholder="Donne un titre à ton intérêt*"
        />
        <p className="new-interest_error-message">{errors.title?.message}</p>

        {/* <input
          {...register('image')}
          className="new-interest_field"
          type="text"
          placeholder="Une image représentative"
        />
        <p className="new-interest_error-message">{errors.image?.message}</p> */}

        <textarea
          {...register('content')}
          className="new-interest_field"
          placeholder="Donne-nous ton avis*"
          rows="3"
        />
        <p className="new-interest_error-message">{errors.content?.message}</p>

        <fieldset>
          <legend className="new-interest_field-legend">Choisis une ou plusieurs catégories* :</legend>
          {categoriesList.map((category) => (
            <div key={category.id} className="new-interest_checkbox">
              <input
                {...register('category')}
                type="checkbox"
                className="new-interest_checkboxfield"
                value={category.id}
              />
              <span>{category.name}</span>
            </div>
          ))}
        </fieldset>

        <p className="new-interest_error-message">{errors.category?.message}</p>

        {/* <label htmlFor="date">
          Si c&apos;est un événement, indique-nous la date
          <input
            {...register('date')}
            className="new-interest_field"
            type="date"
          />
          <p className="new-interest_error-message">{errors.date?.message}</p>
        </label> */}

        <input
          {...register('address')}
          className="new-interest_field"
          type="text"
          placeholder="L'adresse de ton intérêt*"
        />
        <p className="new-interest_error-message">{errors.address?.message}</p>

        {/* <input
          {...register('avatar')}
          className="new-interest_avatar"
          name="avatar"
          type="file"
          placeholder="Avatar"
          accept="image/png, image/jpeg"
        />
        <p className="new-interest_error-message">{errors.avatar?.message}</p> */}

        <input className="new-interest_submit" value="Envoyer" type="submit" />
      </form>

    </div>
  );
}

export default NewInterestForm;
