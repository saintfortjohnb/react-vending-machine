import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <img src={process.env.PUBLIC_URL + '/sodaImage.jpg'} alt="Soda" />
      <p>Refreshing and bubbly!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Soda;
