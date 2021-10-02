import './App.css';

/*
Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente 
como resultado final o quadrado da soma dos três valores lidos.
*/

// vars space
var a = parseInt(prompt("Informe um valor para A: "));
var b = parseInt(prompt("Informe um valor para B: "));
var c = parseInt(prompt("Informe um valor para C: "));

var total = (a + b + c) ** 2;

function App29() {
    return(
        <div className = "App">
            <h1>App29</h1> {/* file */}
            <p>Ex. SOMA QUADRADO DO TOTAL</p> {/* exercise */}
            <p>Após o calculo = {total}</p> {/* result */}
        </div>
    )
}

export default App29; // export app to index.js