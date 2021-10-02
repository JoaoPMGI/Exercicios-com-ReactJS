import './App.css';

const nome = 'João';
const sobrenome = 'Mendes';

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function App() {
  return (
    <div className="App">
      <p>Nome armazenado: {nome} {sobrenome}. By React.</p>
      <p>Soma de 2 + 2 = {soma(2, 2)}</p>
      <p>Subtração de 2 - 2 = {subtracao(2, 2)}</p>
      <p>Multiplicação de 2 * 2 = {multiplicacao(2, 2)}</p>
      <p>Divisão de 2 / 2 = {divisao(2, 2)}</p>
    </div>
  );
}

export default App;