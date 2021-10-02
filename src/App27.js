import './App.css';

/*
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana.
*/

// vars space
var cotacaoDolar = parseFloat(prompt("Informe a cotação do dolar(US$): "));
var reais = parseFloat(prompt("Informe a quantia em reais(R$) para converter em dólares(US$): "));

var dolares = reais / cotacaoDolar;

function App27() {
    return(
        <div className = "App">
            <h1>App27</h1> {/* file */}
            <p>Ex. REAL - DÓLAR</p> {/* exercise */}
            <p>Após o calculo = US${dolares.toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App27; // export app to index.js