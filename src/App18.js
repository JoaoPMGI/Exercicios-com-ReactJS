import './App.css';

/*
Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

// vars space
var tempC = parseFloat(prompt("Informe a temperatura (°C): "));

function App18() {
    return(
        <div className = "App">
            <h1>App18</h1> {/* file */}
            <p>Ex. °C - °F</p> {/* exercise */}
            <p>Após o calculo = {(((9 * (tempC)) + 160) / 5 ).toFixed(1)}°F</p> {/* result */}
        </div>
    )
}

export default App18; // export app to index.js