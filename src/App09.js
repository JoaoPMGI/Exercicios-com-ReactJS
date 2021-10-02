import './App.css';

// vars space
var lado = prompt("Informe o lado do quadrado: "); 

function areaQuadrado(lado) { // function
    return lado ** 2;
}

function App09() {
    return(
        <div className = "App">
            <h1>App09</h1> {/* file */}
            <p>Ex. Área do Quadrado</p> {/* exercise */}
            <p>Área = {areaQuadrado(lado)}cm²</p> {/* result */}
        </div>
    )
}

export default App09; // export app to index.js