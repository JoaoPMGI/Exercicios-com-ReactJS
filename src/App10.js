import './App.css';

// vars space
var raio = prompt("Informe o valor do raio do circulo (cm): ");

function areaCirculo(raio) { // function
    return (~~raio * ~~raio) * Math.PI;
}

function App10() {
    return(
        <div className = "App">
            <h1>App10</h1> {/* file */}
            <p>Ex. Área do Circulo</p> {/* exercise */}
            <p>Área = {areaCirculo(raio).toFixed(2)}cm²</p> {/* result */}
        </div>
    )
}

export default App10; // export app to index.js