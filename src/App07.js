import './App.css';

// vars space
var base = prompt('Informe o valor da base do Triângulo (cm): ');
var altura = prompt('Informe o valor da altura do Triângulo (cm): ');

function areaTriangulo(base, altura) { // function
    return (base * altura) / 2;
}

function App07() {
    return(
        <div className = "App">
            <h1>App07</h1> {/* file */}
            <p>Ex. Área do Triângulo</p> {/* exercise */}
            <p>Área = {areaTriangulo(base, altura)}cm²</p> {/* result */}
        </div>
    )
}

export default App07; // export app to index.js