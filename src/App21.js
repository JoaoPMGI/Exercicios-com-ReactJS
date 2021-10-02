import './App.css';

/*
Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).
*/

// vars space
var tempo = prompt("Informe o tempo de atraso: ");
var valor = prompt("Informe o valor: ");
var taxa = prompt("Informe o valor da taxa: ");

var total = (~~valor) + ((~~valor) * ((~~taxa) / 100)) * (~~tempo);

function App21() {
    return(
        <div className = "App">
            <h1>App21</h1> {/* file */}
            <p>Ex. PRESTAÇÃO</p> {/* exercise */}
            <p>Após o calculo = R${total.toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App21; // export app to index.js