import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { addRecipe } from '../actions';

class App extends Component {
  /**
   *  Após criar o input iniciamos seu state iniciando a propriedade
   *  calendar com um valor inicial null
  */
  state = {
    calendar : null,
  }
  /**
   * E após este componente ser montado faço o destruring da
   * store passado como prop e armazeno em uma constante 
   * local chamada store que vai representar a store vinda
   * de index.js e assim posso executar os método de uma store.
   * Neste caso estamos executando subscribe() sempre que haver
   * uma mudança na store do Redux, que por sua vez atualizara
   * a propriedade calendar do estado desse componente com o 
   * estado atual da store do Redux.
  */
  componentDidMount(){
    const {store} = this.props;

    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      },
    }))

    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>
        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
