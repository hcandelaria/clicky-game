//Import packages
import React, {Component} from 'react';
import Card from '../Card';
import './Form.css';
//List of pokemons
import pokemons from '../../pokemon.json';

class Form extends Component {
  state = {
    pokemons
  };

  render(){
    return(
      <div id="body" className="container">
        <div className="row">
          <div className="col s12">
            <ul>
              {
                this.state.pokemons.map(pokemon => (
                  <Card key={pokemon.id}
                    img={pokemon.img}
                    name={pokemon.name}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

//Export Form
export default Form;
