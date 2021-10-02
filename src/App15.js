import './App.css';

/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor.
*/

// vars space
var vendasCarro = parseFloat(prompt("Informe a quantidade de carros vendidos: "));
var valorCarro = parseFloat(prompt("Informe o ganho por carro: "));
var vendasTotal = parseFloat(prompt("Informe o total de vendas: "));
var salario = parseFloat(prompt("Informe o salário fixo: "));

function App15() {
    return(
        <div className = "App">
            <h1>App15</h1> {/* file */}
            <p>Ex. SALÁRIO FINAL VENDEDOR DE CARROS</p> {/* exercise */}
            <p>Após reajuste, salário final = R${(salario) + (valorCarro * vendasCarro) + (vendasTotal * .05).toFixed(2)}</p> {/* result */}
        </div>
    )
}

export default App15; // export app to index.js