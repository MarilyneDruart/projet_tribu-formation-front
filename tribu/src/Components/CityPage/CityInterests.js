import { React } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';

function CityInterests({ name }) {
  return (
    <div className="CityInterests">
      <h2>
        Intérêts partagés par la communauté à
        {name}
      </h2>
    </div>
  );
}

CityInterests.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CityInterests;
