import './App.css';

/*
Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.
*/

// vars space
var cotacaoDolar = parseFloat(prompt("Informe a contação do dólar(US$) em reais(R$): "));
var dolares = parseFloat(prompt("Informe a quantidade de dólares(US$) que deseja converter para reais(R$): "));

var reais = (cotacaoDolar * dolares).toFixed(2);

function App26() {
    return(
        <div className = "App">
            <h1>App26</h1> {/* file */}
            <p>Ex. DÓLAR - REAL</p> {/* exercise */}
            <p>Após o calculo = R${reais}</p> {/* result */}
        </div>
    )
}

export default App26; // export app to index.js