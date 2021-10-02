import './App.css';

/*
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como
resultado final à soma dos quadrados dos três valores lidos.
*/

// vars space
var a = parseInt(prompt("Informe um valor para A: "));
var b = parseInt(prompt("Informe um valor para B: "));
var c = parseInt(prompt("Informe um valor para C: "));

var total = (a ** 2) + (b ** 2) + (c ** 2);

function App28() {
    return(
        <div className = "App">
            <h1>App28</h1> {/* file */}
            <p>Ex. SOMA QUADRADO DOS NUMEROS</p> {/* exercise */}
            <p>Após o calculo = {total}</p> {/* result */}
        </div>
    )
}

export default App28; // export app to index.js