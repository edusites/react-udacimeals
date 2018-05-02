/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

const appReducer = (state, action) => {
    
  switch(action.type){
    case 'DELETE_FLAVOR':
      return state.filter(obj => obj.flavor !== action.flavor);
    default:
      return state;
  }
}

/**
 * Segundo o enunciado do exercicio devemos criar um appReducer
 * que deverá aceitar dois argumentos, o primeiro um array contendo
 * informações sobre sorvetes e o segundo argumento, um objeto com
 * um chave tipo 'DELETE_FLAVOR' este objeto terá informações em como
 * deletar um sabor do estado inicial. 
 * Com base nessas informações podemos começar com a execução do reducer
 * pois já sabemos a estrutura dos argumentos que ele receberá, então
 * como já sei que um reducer é apenas uma função que recebe obrigato-
 * riamente um estado inicial e uma action que nada mais é que um objeto
 * JavaScript com uma propriedade type definida obrigatoriamente, temos:
*/
const result = appReducer(
  [
    {flavor:'Chocolate', count: 36},
    {flavor: 'Vanilla', count: 210}
  ],
  {type:'DELETE_FLAVOR', flavor:'Vanilla'}
);

console.log(result)