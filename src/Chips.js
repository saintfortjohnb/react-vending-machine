import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img src={process.env.PUBLIC_URL + '/chipsImage.jpg'} alt="Chips" />
      <p>Crunchy, salty goodness in every bite!</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Chips;
