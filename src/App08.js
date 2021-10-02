import './App.css';

// vars space
var base = prompt('Informe o valor da base do retângulo (cm): ');
var altura = prompt('Informe o valor da altura do retângulo (cm): ');

function areaRetangulo(base, altura) { // function
    return base * altura;
}

function App08() {
    return(
        <div className = "App">
            <h1>App08</h1> {/* file */}
            <p>Ex. Área do Retângulo</p> {/* exercise */}
            <p>Área = {areaRetangulo(base, altura)}cm²</p> {/* result */}
        </div>
    )
}

export default App08; // export app to index.js