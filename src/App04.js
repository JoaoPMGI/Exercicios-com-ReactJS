import './App.css';

var a = parseInt(prompt('Digite um valor: '));
var b = parseInt(prompt('Digite outro valor: '));

function divisao() {
    return a / b;
}

function App04() {
    return(
        <div className = "App">
            <h1>App04</h1>
            <p>Ex. Divisão</p>
            <p>Divisão de {a} e {b} resultado = {divisao(a, b)}</p>
        </div>
    )
}

export default App04;