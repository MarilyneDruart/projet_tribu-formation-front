import { React } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';

function CityInterests({ name }) {
  return (
    <div className="CityInterests">
      <h2>
        {/* eslint-disable-next-line no-trailing-spaces */}
        Intérêts partagés par la communauté à
      </h2>
      <h2>{name}</h2>
    </div>
  );
}

CityInterests.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CityInterests;
