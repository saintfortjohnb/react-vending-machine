import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <img src={process.env.PUBLIC_URL + '/candyImage.jpg'} alt="Candy" />
      <p>Sweet and delightful!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Candy;
