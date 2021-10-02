import './App.css';

function soma() {
    let a = parseInt(prompt('Digite um valor: '));
    let b = parseInt(prompt('Digite outro valor: '));
    return a + b;
}

function subtracao() {
    let a = parseInt(prompt('Digite um valor: '));
    let b = parseInt(prompt('Digite outro valor: '));
    return a - b;
}
  
function multiplicacao() {
    let a = parseInt(prompt('Digite um valor: '));
    let b = parseInt(prompt('Digite outro valor: '));
    return a * b;
}
  
function divisao() {
    let a = parseInt(prompt('Digite um valor: '));
    let b = parseInt(prompt('Digite outro valor: '));
    return a / b;
}

function antecessor(a) {

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

function App02() {
    return(
        <div className = "App">
            <h1>App02</h1>
            <p>Ex. Subtração</p>
            <p>Subtração resultado = {subtracao()}</p>
        </div>
    )
}

function App03() {
    return(
        <div className = "App">
            <h1>App03</h1>
            <p>Ex. Multiplicação</p>
            <p>Multiplicação resultado = {multiplicacao()}</p>
        </div>
    )
}

function App04() {
    return(
        <div className = "App">
            <h1>App04</h1>
            <p>Ex. Divisão</p>
            <p>Divisão resultado = {divisao()}</p>
        </div>
    )
}

function App05() {
    return(
        <div className = "App">
            <h1>App04</h1>
            <p>Ex. Divisão</p>
            <p> = {divisao()}</p>
        </div>
    )
}

function App06() {
    return(
        <div className = "App">
            <h1>App04</h1>
            <p>Ex. Divisão</p>
            <p> = {divisao()}</p>
        </div>
    )
}

//export default App01;
export default App02;