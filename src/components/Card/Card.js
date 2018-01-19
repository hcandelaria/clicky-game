//Import packages
import React from 'react';
import './Card.css';

const Card = (props) => (
  <div>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <a href="#!"
            onClick={props.catchPokemon}
            id={props.id}><img
            src={props.img}
            alt={props.name}/>
          </a>
        </div>
      </div>
    </div>
  </div>
);

//Export Card
export default Card;
