import './App.css';

/**
 * calcular alcool ou gasolina
 * 
 */

// vars space
var gasolina = parseFloat(prompt("Informe seu peso: "));
var alcool = parseFloat(prompt("Informe sua altura: "));

function imc(peso, altura) {
    return (peso / (altura * altura));
}

function App30() {
    return(
        <div className = "App">
            <h1>App30</h1> {/* file */}
            <p>Ex. IMC</p> {/* exercise */}
            <p>Após o calculo, IMC = {imc(peso, altura).toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App30; // export app to index.js