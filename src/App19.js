import './App.css';

/*
 Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume Raio ** Altura
*/

// vars space
var raio = prompt("Informe o raio da lata (cm): ");
var altura = prompt("Informe a altura da lata (cm): ");

var volume = ((Math.PI).toFixed(2)) * ((~~raio)**2) * (~~altura);

function App19() {
    return(
        <div className = "App">
            <h1>App19</h1> {/* file */}
            <p>Ex. VOLUME LATA DE ÓLEO</p> {/* exercise */}
            <p>Após o calculo = {volume.toFixed(1)}cm³</p> {/* result */}
        </div>
    )
}

export default App19; // export app to index.js