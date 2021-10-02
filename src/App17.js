import './App.css';

/*
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: 
                     n1 * 2 + n2 * 3 + n3 * 5 
 mediafinal = -----------------------------------
                                10 
*/

// vars space
var nota1 = prompt("Informe a primeira nota: ");
var nota2 = prompt("Informe a segunda nota: ");
var nota3 = prompt("Informe a terceira nota: ");

var media = (((~~nota1 * 2) + (~~nota2 * 3) + (~~nota3 * 5)) / 10);

function App17() {
    return(
        <div className = "App">
            <h1>App17</h1> {/* file */}
            <p>Ex. Média ponderada do aluno</p> {/* exercise */}
            <p>Após o calculo = {(media)}</p> {/* result */}
        </div>
    )
}

export default App17; // export app to index.js