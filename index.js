//João vitor
//02/08/2024

// Variaveis/ Operadores/ Estrutura de decisões 
//Tive ideia pra fazer um laço de repetição mas me faltou conhecimento pra concluir, vou seguir o curso e depois volto pra completar o códiog.

let nomeHeroi = "Brendon"
let xpHeroi = 950
let elo = ""


if (xpHeroi< 1000) {
    elo = "Ferro"
}else if ((xpHeroi >= 1001) && (xpHeroi <= 2000)){
    elo = "Bronze"
}else if ((xpHeroi >= 1001) && (xpHeroi <= 2000)){
    elo = "Prata"
}else if ((xpHeroi >= 2001) && (xpHeroi <= 5000)){
    elo = "Ouro"
}else if ((xpHeroi >= 5001) && (xpHeroi <= 7000)){
    elo = "Platina"
}else if ((xpHeroi >= 7001) && (xpHeroi <= 8000)){
    elo = "Ascendente"
}else if ((xpHeroi >= 8001) && (xpHeroi <= 9000)){
    elo = "Imortal"
}else if(xpHeroi >= 10001){
    elo = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + elo)



