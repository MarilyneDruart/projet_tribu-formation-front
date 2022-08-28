import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/styles.scss';
import CityInterests from './CityInterests/CityInterests';
import CityImage from './CityImage/CityImage';
import { setCity } from '../../actions/cities';

function CityPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const findCity = (citiesList, searchedSlug) => {
    const city = citiesList.find((testedCity) => testedCity.slug === searchedSlug);
    if (slug !== searchedSlug) {
      <Navigate to="/NotFound" replace />;
    }

    return city;
  };

  const currentCity = useSelector((state) => findCity(state.cities.list, slug));
  console.log(currentCity);
  dispatch(setCity(currentCity));

  if (!currentCity) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="CityPage">
      <CityImage image={currentCity.image} name={currentCity.name} />
      <p className="CityPage_description">{currentCity.description}</p>

      <CityInterests />
    </div>

  );
}

export default CityPage;
