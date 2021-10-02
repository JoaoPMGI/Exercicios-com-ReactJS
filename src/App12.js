import './App.css';

// vars space
var eleitores = prompt("Informe o total de eleitores: ");
var votosValidos = prompt("Informe o total de votos válidos: ");
var votosNulos = prompt("Informe o total de votos nulos: ");
var votosBranco = prompt("Informe o total de votos em branco: ");

function App12() {
    return(
        <div className = "App">
            <h1>App12</h1> {/* file */}
            <p>Ex. Eleição</p> {/* exercise */}
            <p>Eleitores: {eleitores}</p> {/* result */}
            <p>Votos válidos: {(~~votosValidos) / (~~eleitores) * 100}%</p> {/* result */}
            <p>Votos em Nulo: {(~~votosNulos) / (~~eleitores) * 100}%</p> {/* result */}
            <p>Votos em Branco: {(~~votosBranco) / (~~eleitores) * 100}%</p> {/* result */}
        </div>
    )
}

export default App12; // export app to index.js