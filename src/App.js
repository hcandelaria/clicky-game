//Import packages
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';


class App extends Component {

  render(){
    return (
      <section>
        <Navbar />
        <Form/>
      </section>
    );
  }

};

//Export app
export default App;
