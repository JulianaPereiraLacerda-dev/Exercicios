// let contador = 1;

// while(contador <= 3){
//     console.log("Repetindo......");
//     console.log(contador);
//     contador ++
// }

//DO WHILE ->

// let numero = 5;

// do{
//     console.log("Executou pelo menos uma vez.");
// }
// while(numero < 3)

//diferença -> while para o do while é que o while pergunta depois

//FORWACH -> Usado para quando temos uma lista de elementos e queremos percorrer os elementos e queremos percorrer os elementos dessa lista
// Lista(array)

let nomes = ["Maria Eduarda", "Kauê", "Lailon", "Julia"]

nomes.forEach(function(nome) {
    console.log("Nome:", nome);
})


// Pega a lista de nomes e para cada nome imprima o nome