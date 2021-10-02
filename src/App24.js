import './App.css';

/*
Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME ← COMPRIMENTO * LARGURA * ALTURA.
*/

// vars space
var comprimento = prompt("Informe o comprimento da caixa (cm): ");
var largura = prompt("Informe a largura da caixa (cm): ");
var altura = prompt("Informe a altura da caixa (cm): ");

var volume = ((~~comprimento) * (~~altura) * (~~largura));

function App24() {
    return(
        <div className = "App">
            <h1>App24</h1> {/* file */}
            <p>Ex. VOLUME DE UMA CAIXA</p> {/* exercise */}
            <p>Após o calculo = {volume}cm³</p> {/* result */}
        </div>
    )
}

export default App24; // export app to index.js