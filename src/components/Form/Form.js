//Import packages
import React, {Component} from 'react';
import Card from '../Card';
import GameOver from '../GameOver';
import './Form.css';
//List of pokemons
import pokemons from '../../pokemon.json';
// Load Chance
const Chance = require('chance');
// Instantiate Chance so it can be used
const chance = new Chance();
//Class Form is the background
class Form extends Component {
  //Hold the pokemons and the pokemonsCatched
  state = {
    status: true,
    pokemons,
    encounter: [],
    pokemonsCathed:[]
  };
  //On component mount
  componentDidMount(){
    this.findPokemon();
  }
  //Find 3 pokemons to catch
  findPokemon = () =>{
    this.setState({ encounter: chance.pickset(this.state.pokemons, 3)});
  }
  //eventHandler
  catchPokemon = e =>{
    e.preventDefault();
    if(this.state.pokemonsCathed.includes(e.target.id)){
      console.log(this.state.status);
      this.setState({ status : false});
      console.log("lost");
    }else{
      console.log(e.target.id);
      this.state.pokemonsCathed.push(e.target.id);
      this.props.updateCaughtCount();
      this.findPokemon();
    }
  }
  //If you lost
  gameStatus = () =>{
    return this.state.status;
  }
  render(){
    return(
      <div id="body" className="container">
        <div className="row">
          <div className="col s12">
            <ul>
              { this.gameStatus()
                ? (this.state.encounter.map(pokemon => (
                  <Card
                    catchPokemon={this.catchPokemon}
                    key={pokemon.id}
                    id={pokemon.id}
                    img={pokemon.img}
                    name={pokemon.name}
                  />
                )))
                : (
                  <GameOver/>
                )
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
