import './App.css';

/*
 O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.
*/

// vars space
var custoCarro = parseFloat(prompt("Informe o custo de fábrica do carro: "));

function App14() {
    return(
        <div className = "App">
            <h1>App14</h1> {/* file */}
            <p>Ex. PREÇO CARRO REAJUSTADO</p> {/* exercise */}
            <p>Após reajuste, preço do carro = R${((custoCarro) + (custoCarro * .28) + (custoCarro * .45)).toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App14; // export app to index.js