import './App.css';

// vars space
var a = parseInt(prompt('Digite um valor: ')); 

function sucessor() { // function
    return a + 1;
}

function App06() {
    return(
        <div className = "App">
            <h1>App06</h1> {/* file */}
            <p>Ex. Sucessor</p> {/* exercise */}
            <p>Sucessor de {a} = {sucessor(a)}</p> {/* result */}
        </div>
    )
}

export default App06; // export app to index.js