import './App.css';

var a = parseInt(prompt('Digite um valor: '));
var b = parseInt(prompt('Digite outro valor: '));

function soma(a, b) {
    return a + b;
}

function App01() {
    return(
        <div className = "App">
            <h1>App01</h1>
            <p>Ex. Soma</p>
            <p>Soma de {a} com {b} = {soma(a, b)}</p>
        </div>
    )
}

export default App01;