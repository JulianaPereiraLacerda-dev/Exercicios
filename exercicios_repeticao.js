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

// let numero = Math.floor(Math.random() * 100) + 1;
// console.log(numero);
// let numero_usuario = Number(prompt("Adivinhe um número de 1 a 100"));

// while(numero_usuario !== numero){
//     if( numero_usuario > numero){
//         let numero_usuario2 = Number(prompt("O número é maior que o número correto."));
        
//     }
//     else if(numero_usuario < numero){
//         alert("O número é menor que o correto. ")
//     }
//     else{
//         alert("Fim. ")
//     }
// }
