//Import packages
import React from 'react';
import './Card.css';

const Card = (props) => (
  <div>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src="./img/003.png" alt='pokemon'></img>
        </div>
      </div>
    </div>
  </div>
);

//Export Card
export default Card;
