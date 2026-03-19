// let contador = 1;

// while(contador <= 3){
//     console.log("Repetindo......");
//     console.log(contador);
//     contador ++
// }

//DO WHILE ------------------------------------------------------------------------------------------------------

// let numero = 5;

// do{
//     console.log("Executou pelo menos uma vez.");
// }
// while(numero < 3)

//diferença -> while para o do while é que o while pergunta depois

//FORWACH ---------------------------------------------------------------------------------------------------------- 
// //Usado para quando temos uma lista de elementos e queremos percorrer os elementos e queremos percorrer os elementos dessa lista
// Lista(array)

// let nomes = ["Maria Eduarda", "Kauê", "Lailon", "Julia"]

// nomes.forEach(function(nome) {
//     console.log("Nome:", nome);
// })


// Pega a lista de nomes e para cada nome imprima o nome

//FOREACH simplificado -> (arrow function) ----------------------------------------------------------------------------
// let nomes = ["Maria Eduarda", "Kauê", "Lailon", "Julia"]

// nomes.forEach(nome =>{
//     console.log(nome);
// })

//Sistema de intervalo definido pelo usuário---------------------------------------------------------------
// let inicio = Number(prompt("Digite o número inicial: "));
// let fim = Number(prompt("Digite o número final "));

// for(let i = inicio; i <= fim; i+=2){
//     console.log(i);
// }

//Contagem pulando os números
// for(let i = 0; i <= 10; i+=2){
//     console.log(i);                          
// }

//while com condição para sair do sistema-------------------------------------------------------------------

// let valor = "";

// while(valor != "sair"){
//     valor = prompt("Digite algo ou 'sair' para parar");
//     console.log("Você digitou: ", valor);
// }

//contador com regra--------------------------------------------------------------------------------------------
// let limite = Number(prompt("Mostrar números maiores que: "));

// for (let i = 1; i <= 10; i++){
//     if(i < limite){
//         console.log(i)
//     }
// }

//Percorrendo um array ----------------------------------------------------------------------------------------
// let cores = ["Azul", "Verde", "Vermelho"];

// for(let i = 0; i < cores.length; i++){
//     console.log("Posição da cor: " + i + "-" + cores[i]);
// }
// condição dentro do foreach-----------------------------------------------------------------------------------
// let numeros = [3, 7, 10, 15];

// numeros.forEach(num => {
//     if (num > 8){
//         console.log("Maior que 8: ",num)
//     }
// })