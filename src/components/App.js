import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
/**
 * Removido os métodos de baixo nível do Redux por ser
 * complexo e existir uma biblioteca chamada react-redux
 * que simplifica todo esse processo.
*/
class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
