import './App.css';

var a = parseInt(prompt('Digite um valor: '));
var b = parseInt(prompt('Digite outro valor: '));

function subtracao() {
    return a - b;
}

function App02() {
    return(
        <div className = "App">
            <h1>App02</h1>
            <p>Ex. Subtração</p>
            <p>Subtração de {a} e {b} resultado = {subtracao(a, b)}</p>
        </div>
    )
}

export default App02;