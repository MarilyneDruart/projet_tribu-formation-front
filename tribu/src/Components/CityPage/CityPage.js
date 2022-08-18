import { React, useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/styles.scss';

function CityPage() {
  const [city, setCity] = useState([]);

  const fetchResults = () => {
    axios
      .get('http://svitlana-burlak-kuzoski.vpnuser.lan:8000/api/cities/31')
      .then((response) => {
        console.log(response.data);
        setCity(response.data);
        console.log(Object.keys(city));
      })
      .catch((error) => {
        console.log('Erreur !', error);
      });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="CityPage">
      <img src={city.image} className="CityPage_img" alt="ville" />
      <div className="CityPage_content">
        <h2 className="CityPage_title">{city.name}</h2>
      </div>
      <p className="CityPage_description">{city.description}</p>
    </div>

  );
}

export default CityPage;
