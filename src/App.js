//Import packages
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

//List of pokemons
import pokemons from './pokemon.json';

class App extends Component {
  state = {
    pokemons
  };

  render(){
    return (
      <section>
        <Navbar />
        <Form />
      </section>
    );
  }

};

//Export app
export default App;
