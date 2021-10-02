import './App.css';

function soma() {
    let a = parseInt(prompt('Digite um valor: '));
    let b = parseInt(prompt('Digite outro valor: '));
    return a + b;
}

function App01() {
    return(
        <div className = "App">
            <h1>App01</h1>
            <p>Ex. Soma</p>
            <p>Soma resultado = {soma()}</p>
        </div>
    )
}

export default App01;