import './App.css';

// vars space
var anos = prompt('Informe seus anos de vida: ');
var meses = prompt('Informe seus meses de vida: ');
var dias = prompt('Informe seus dias de vida: ');

function anosEmDias(anos, meses, dias) { // function
    return ((~~anos)*365) + ((~~meses) * 30) + dias;
}

function App11() {
    return(
        <div className = "App">
            <h1>App11</h1> {/* file */}
            <p>Ex. Vida em Dias</p> {/* exercise */}
            <p>Total = {anosEmDias(anos, meses, dias)} dias</p> {/* result */}
        </div>
    )
}

export default App11; // export app to index.js