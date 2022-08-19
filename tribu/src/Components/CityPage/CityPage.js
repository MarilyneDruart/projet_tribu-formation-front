import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CityInterests from './CityInterests';
import '../../styles/styles.scss';

function CityPage() {
  const { slug } = useParams();

  const findCity = (citiesList, searchedSlug) => {
    const city = citiesList.find((testedCity) => testedCity.slug === searchedSlug);
    return city;
  };

  const currentCity = useSelector((state) => findCity(state.cities.list, slug));

  return (
    <div className="CityPage">
      <img src={currentCity.image} className="CityPage_img" alt={currentCity.name} />
      <div className="CityPage_content">
        <h2 className="CityPage_title">{currentCity.name}</h2>
      </div>
      <p className="CityPage_description">{currentCity.description}</p>

      <CityInterests name={currentCity.name} />
    </div>

  );
}

export default CityPage;
