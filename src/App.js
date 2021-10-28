import React, { Component } from 'react';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import beasts from "./assets/data.json";
import SelectedBeast from './components/SelectedBeast.js';

export default class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      selectedBeast: {},
      show: false
    }
  }

  selectBeast = (title) => {

    let updatedBeast = {};
    beasts.forEach(beast => {
      if(beast.title === title) {
        updatedBeast = beast;
      }
    });
    this.setState({
      selectedBeast: updatedBeast,
      show: true
    });
    console.log(this.state);
  }

  unselectBeast = () => {
    this.setState({
      selectedBeast: {}
    })
  }

  closeModal = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main selectBeast={this.selectBeast} beasts={beasts}/>
        <Footer />
        <SelectedBeast closeModal={this.closeModal} show={this.state.show} beast={this.state.selectedBeast}/>
      </div>
    )
  }
}