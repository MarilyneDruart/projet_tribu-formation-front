/* eslint-disable max-len */
import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Imports locaux
import '../../styles/styles.scss';

function UserProfilePage() {
  const {
    firstname,
    lastname,
    presentation,
    post,
    cityName,
    image,
  } = useSelector((state) => state.user);

  const citySlug = cityName.toLowerCase();
  console.log(post);

  return (
    <div className="Home">
      <img src={image} alt="avatar" />
      <h2 className="Home_name">
        {firstname}
        {' '}
        {lastname}
      </h2>
      <h3>{cityName}</h3>
      <p>{presentation}</p>
      <h4 className="Home_interests">Mes intérêts</h4>
      <div className="Home_interests_container">
        {post.length > 0 && post.map((interests) => (
          <article className="CityInterests_card" key={interests.id}>
            <Link to={`/ville/${citySlug}/${interests.id}`}>
              <div className="CityInterests_header">
                <img src={interests.image} alt={interests.title} />
              </div>
              <div className="CityInterests_content">
                <h4 className="CityInterests_title">{interests.title}</h4>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default UserProfilePage;
