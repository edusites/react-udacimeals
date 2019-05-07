import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())
/**
 * Para evitar de descer todos os subcomponents para passar a store
 * criada com o createStore do redux quando um subcomponentes desses
 * precisar acessa-la ou precisar enviar uma action, será necessário
 * encapsular o componente raiz do React com o componente Provider
 * que faz parte da lib de componentes do react-redux, e ao invés de
 * passar a store para o component APP será passao ao Provider, dessa
 * forma facilitando o acesso a store e envio de actions aos 
 * subcomponetes do React.
 */
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
registerServiceWorker();
