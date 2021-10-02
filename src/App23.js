import './App.css';

/*
 Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.
*/

// vars space
var a = parseInt(prompt("Digite um valor para A: "));
var b = parseInt(prompt("Digite um valor para B: "));
var c = parseInt(prompt("Digite um valor para C: "));
var d = parseInt(prompt("Digite um valor para D: "));

function App23() {
    return(
        <div className = "App">
            <h1>App23</h1> {/* file */}
            <p>Ex. OPERAÇÕES COM VALRORES - A = {a} e B = {b}</p> {/* exercise */}
            <p>{"A + B = " + (a + b) + " -\nA + C = " + (a + c) + " -\nA + D = " + (a + d)
            + " -\nB + C = " + (b + c) + " -\nB + D = " + (b + d) + " -\nC + D = " + (c + d)}</p> {/* result */}
            <p>{"A * B = " + (a * b) + " -\nA * C = " + (a * c) + " -\nA * D = " + (a * d)
            + " -\nB * C = " + (b * c) + " -\nB * D = " + (b * d) + " -\nC * D = " + (c * d)}</p> {/* result */}
        </div>
    )
}

export default App23; // export app to index.js