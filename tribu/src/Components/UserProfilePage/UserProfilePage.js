/* eslint-disable max-len */
import { React } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setUser } from '../../actions/user';

import MainImageProfile from './MainImageProfile';

// Imports locaux
import '../../styles/styles.scss';

function UserProfilePage() {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.token);
  // console.log(token);

  // useEffect(() => {
  //   axios.defaults.headers.common.Authorization = `bearer ${token}`;
  //   axios
  //     .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/users')
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(setUser(response.data));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="Home">
      <MainImageProfile />
      <h2 className="Home_name">Prénom NOM</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat libero nemo iure nobis, voluptate assumenda doloribus pariatur nesciunt! Consequuntur fugiat culpa dolore quod maiores repellendus facilis nam unde earum.</p>
      <h3>Mes intérêts</h3>
    </div>
  );
}

export default UserProfilePage;
