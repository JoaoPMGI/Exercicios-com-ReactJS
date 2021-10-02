import './App.css';

/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.
*/

// vars space
var salario = parseFloat(prompt("Informe o salario: "));
var reajuste = parseFloat(prompt("Informe o reajuste (10 - 10%, 20 - 20%): "));

function App13() {
    return(
        <div className = "App">
            <h1>App13</h1> {/* file */}
            <p>Ex. Salário Reajustado</p> {/* exercise */}
            <p>Após reajuste, salario = R${(salario + (salario * (reajuste / 100))).toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App13; // export app to index.js