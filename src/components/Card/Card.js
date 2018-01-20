//Import packages
import React from 'react';
import './Card.css';

const Card = (props) => (
  <div>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <a href="#!"
            onClick={props.catchPokemon}>
            <img
              className='pokemon'
              style={{opacity: 1}}
              id={props.id}
              src={props.img}
              alt={props.name}
            />
            <img
              className='pokeball hide'
              alt="pokeball"
              src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

//Export Card
export default Card;
