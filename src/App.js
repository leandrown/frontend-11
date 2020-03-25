import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);
  // useState retorna um Array com duas posições
  // Array[valor, funcaoDeAtualizacao]

  // valor => valor da variavel
  // funcaoDeAtualizacao => funcao de atualizacao do valor
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
