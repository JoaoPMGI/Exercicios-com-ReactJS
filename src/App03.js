import './App.css';

var a = parseInt(prompt('Digite um valor: '));
var b = parseInt(prompt('Digite outro valor: '));

function multiplicacao() {
    return a * b;
}

function App03() {
    return(
        <div className = "App">
            <h1>App03</h1>
            <p>Ex. Multiplicação</p>
            <p>Multiplicação de {a} e {b} resultado = {multiplicacao(a, b)}</p>
        </div>
    )
}

export default App03;