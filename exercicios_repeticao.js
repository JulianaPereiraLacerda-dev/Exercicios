//  BÁSICO

// Contagem de 1 a 10 -------------------------------------------------------------------------------
// let inicio = 1;
// let fim = 10;

// for(let i = inicio; i <= fim; i ++){
//     console.log(i)
// } 

//Tabuada de um número -------------------------------------------------------------------------------
// let numero = Number(prompt("Digite um número:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// }

//Soma dos primeiros N números naturais ---------------------------------------------------------------

// let numero = Number(prompt("Digite um número: "));

// for(let i = 1; )


// let limite = Number(prompt("Mostrar números maiores que: "));

// for (let i = 1; i <= 10; i++){
//     if(i < limite){
//         console.log(i)
//     }
// }


//Contagem pulando os números
// for(let i = 0; i <= 10; i+=2){
//     console.log(i);                          
// }


//NIVÉL INTERMEDIÁRIO
//Exibir os números pares de 1 a 50 -------------------------------------------------------------------
// for(let i = 0; i <= 50; i+=2){
//     console.log(i)
// }

//Jogo de adivinhação ----------------------------------------------------------------------------------

// Gera número aleatório de 1 a 100
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// let palpite = Number(prompt("Adivinhe o número de 1 a 100:"));

// while (palpite !== numeroSecreto) {
//     if (palpite > numeroSecreto) {
//         palpite = Number(prompt("Errou! O número é MENOR. Tente novamente:"));
//     } else {
//         palpite = Number(prompt("Errou! O número é MAIOR. Tente novamente:"));
//     }
// }

// // alert("Parabéns! Você acertou o número era " + numeroSecreto);

//Contagem regressiva ----------------------------------------------------------------------------------
// let numero = Number(prompt("Digite um número:"));
// while (numero >= 0) {
//     console.log(numero);
//     numero--; 
// }