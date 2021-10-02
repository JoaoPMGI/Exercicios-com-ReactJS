import './App.css';

/*
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro 
valor pelo segundo.
*/

// vars space
var a = prompt("Digite um número para a váriavel A: ");
var b = prompt("Digite um número para a váriavel B: ");

var total = ((~~a) - (~~b)) ** 2;

function App25() {
    return(
        <div className = "App">
            <h1>App25</h1> {/* file */}
            <p>Ex. QUADRADO DA DIFERENÇA</p> {/* exercise */}
            <p>Após o calculo = {total}</p> {/* result */}
        </div>
    )
}

export default App25; // export app to index.js