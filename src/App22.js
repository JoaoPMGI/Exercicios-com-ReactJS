import './App.css';

/*
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da 
variável A. Apresentar os valores trocados
*/

// vars space
var a = parseInt(prompt("Digite um valor para A: "));
var b = parseInt(prompt("Digite um valor para B: "));

a = a + b;
b = a - b;
a = a - b;

function App22() {
    return(
        <div className = "App">
            <h1>App22</h1> {/* file */}
            <p>Ex. TROCAR VALRORES</p> {/* exercise */}
            <p>Valor de A = {a} e Valor de B = {b}</p> {/* result */}
            <code>
                Fórmula <br/>
                a = a + b; <br/>
                b = a - b; <br/>
                a = a - b; <br/>
            </code>
        </div>
    )
}

export default App22; // export app to index.js