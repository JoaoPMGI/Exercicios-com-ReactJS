import './App.css';

/*
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo): 
        C . F - 32 
 ---------- = -----------
           5 . 9 
Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F
*/

// vars space
var tempF = parseFloat(prompt('Informe a temperatura (°F): '));
var tempC = ((tempF) - 32) / 1.8;

function App16() {
    return(
        <div className = "App">
            <h1>App16</h1> {/* file */}
            <p>Ex. °F - °C</p> {/* exercise */}
            <p>Após o calculo = {(tempC).toFixed(1)}°C</p> {/* result */}
        </div>
    )
}

export default App16; // export app to index.js