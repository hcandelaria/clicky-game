//Import packages
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';


class App extends Component {
  state = {
    caughtCount: 0
  };
  updateCaughtCount=()=>{
    this.setState({ caughtCount: this.state.caughtCount + 1});
  }
  render(){
    return (
      <section>
        <Navbar caughtCount={this.state.caughtCount} />
        <Form updateCaughtCount={this.updateCaughtCount}/>
      </section>
    );
  }

};

//Export app
export default App;
