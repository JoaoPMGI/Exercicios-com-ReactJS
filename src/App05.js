import './App.css';

// vars space
var a = parseInt(prompt('Digite um valor: ')); 

function antecessor(a) { // function
    return a - 1;
}

function App05() {
    return(
        <div className = "App">
            <h1>App05</h1> {/* file */}
            <p>Ex. Antecessor</p> {/* exercise */}
            <p>Antecessor de {a} = {antecessor(a)}</p> {/* result */}
        </div>
    )
}

export default App05; // export app to index.js