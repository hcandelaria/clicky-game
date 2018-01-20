//Import packages
import React, {Component} from 'react';
import './GameOver.css';

class GameOver extends Component {
  //Hold the pokemons and the pokemonsCatched
  // state = {
  // };

  render(){
    return(
      <div className='center container'>
        <h1 className='green-text darken-2'>
          GAME OVER
        </h1>
        <a href='/'>
          <img
            className='responsive-img'
            src='./img/gameOver/gameOver.gif' alt='squirtle tongue out'
          />
        </a>
        <br></br>
        <a
          href='/'
          className="waves-effect btn green darken-2">
          <i className="material-icons left">
            games
          </i>Play again
        </a>
      </div>
    );
  }
};

//Export Form
export default GameOver;
