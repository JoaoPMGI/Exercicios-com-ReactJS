import './App.css';

/*
Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem.
*/

// vars space
var tempo = prompt("Informe o tempo do trajeto (Horas): ")
var velocidade = prompt("Informe a velocidade que pretende percorrer no trajeto (Km/H): ");

var distancia = (~~tempo) * (~~velocidade);

var combustivel = (~~distancia) / 12;

function App20() {
    return(
        <div className = "App">
            <h1>App20</h1> {/* file */}
            <p>Ex. LITROS COMBUSTÍVEL</p> {/* exercise */}
            <p>Após o calculo, Velocidade = {velocidade}Km/h</p> {/* result */}
            <p>Após o calculo, Tempo = {tempo}h</p> {/* result */}
            <p>Após o calculo, Distância = {distancia}Km</p> {/* result */}
            <p>Após o calculo, Litros de Combustível = {combustivel}L</p> {/* result */}
        </div>
    )
}

export default App20; // export app to index.js