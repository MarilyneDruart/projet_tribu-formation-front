import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CityInterests from './CityInterests/CityInterests';
import '../../styles/styles.scss';
import CityImage from './CityImage/CityImage';

function CityPage() {
  const { slug } = useParams();

  const findCity = (citiesList, searchedSlug) => {
    const city = citiesList.find((testedCity) => testedCity.slug === searchedSlug);
    if (slug !== searchedSlug) {
      <Navigate to="/NotFound" replace />;
    }

    return city;
  };

  const currentCity = useSelector((state) => findCity(state.cities.list, slug));
  console.log(currentCity);

  if (!currentCity) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="CityPage">
      <CityImage image={currentCity.image} name={currentCity.name} />
      <p className="CityPage_description">{currentCity.description}</p>

      <CityInterests name={currentCity.name} id={currentCity.id} slug={slug} />
    </div>

  );
}

export default CityPage;
