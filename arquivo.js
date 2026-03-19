//Básico 

// ----------------------1. Verificar Maior idade----------------------------------------------
// let idade = Number(prompt("Por favor informe sua idade: "));

// if(idade >= 18){
//     alert("Você está liberado");
// }
// else{
//     alert("Você não tem idade suficiente.")
// }

// -----------------2. Verificar se um número e positivo ou negativo ---------------------------
// let numero = Number(prompt("Insira um número para que eu verifique se é positivo ou negativo: "));

// if(numero <= 0){
//     alert("Número negativo: ");
// }
// else{
//     alert("Número Positivo");
// }

//-------------------3. Aprovação em uma prova---------------------------------
// let nota = Number(prompt("Digite a nota da prova: "));

// if(nota >= 60){
//     alert("Aluno Aprovado");
// }
// else{
//     alert("Aluno Reprovado. ");
// }

//------------------------------4. Verificar se um número é positivo, negativo ou zero-------------------------
// let numero = Number(prompt("Insira um número para que o sistema verifique se esse número é negativo ou positivo: "));

// if(numero > 0){
//     alert("Número Positivo.");
//     if(numero < 0){
//         alert("Número negativo");
//     }

// }
// else{
//     alert("O número é zero")
// }

//--------------------5.Classificação de idade------------------------------------------------------

// let idade = Number(prompt("Insira sua idade: "))

// if(idade >= 0 && idade <= 12){
//     alert("Você é uma criança.");
    
// }
// else if(idade >= 13 && idade <= 17){
//     alert("Você é um adolescente. ");
// }

// else{
//     alert("Você é um adulto.");
// }

//---------------------6. Verificar se um número é par ou ímpar------------------------------------------
// let numero = Number(prompt("Digite um número para que o sistema verifique se ele é positivo ou negativo: "));

// if(numero % 2==0){
//     alert("O número é par.");
// }
// else{
//     alert("O número é impar ");
// }

//===================Intermediário===========================

//1.-------------------Calculadora simples------------------------------------------

// let num1 = Number(prompt("Digite o primeiro número que vc deseja calcular: "));
// let num2 = Number(prompt("Digite o segundo número que vc deseja calcular: "));
// let operado = prompt("Digite qual operação matemática vc deseja realizar (+ - * /): ");

// if(operado == "+"){
//     alert(`O resultado da sua operação é: ${num1 + num2}`);
// }
// else if(operado == "-"){
//     alert(`O resultado da sua operação é: ${num1 - num2}`);
// }
// else if(operado == "*"){
//     alert(`O resultado da sua operação é: ${num1 * num2}`);
// }
// else if(operado == "/"){
//     alert(`O resultado da sua operação é: ${num1 / num2}`)
// }
// else{
//     alert("Esse operador não está presente nessa calculadora")
// }

//----------------------2. Maior entre três números--------------------------
// let n1 = Number(prompt("Digite o primeiro número:"));
// let n2 = Number(prompt("Digite o segundo número:"));
// let n3 = Number(prompt("Digite o terceiro número:"));

// if (n1 >= n2 && n1 >= n3) {
//   alert("O maior número é: " + n1);
// } else if (n2 >= n1 && n2 >= n3) {
//   alert("O maior número é: " + n2);
// } else {
//   alert("O maior número é: " + n3);
// }

//----------------------Desconto em compras--------------------------------
// let compra = Number(prompt("Digite o valor da compra: "));

// if(compra > 100){
//     alert(`Você recebeu 10% de desconto o valor do seu desconto é: ${compra * 10/100} reais`);
// }
// else{
//     alert("Para recebr um deesconto você deve comprar mais de 100 reais.")
// }

//---------------Sistema de login simples------------------------------
// let usuario = prompt("Digite seu usuário: ");
// let senha = prompt("Digite sua senha: "); 

// if(usuario == "admin" && senha == "1234"){
//     alert("Login bem sucedido");
// }
// else{
//     alert("Acesso negado");
// }

//===================Nível avançado================

//---------------Frete de pedido-------------------
// let valorCompra = Number(prompt("Digite o valor de sua compra: "));

// if(valorCompra == 100){
//     alert("Frete grátis");
// }
// else if(valorCompra == 50){
//     alert(`O valor do frete é 10 reais. Valor total = R$${valorCompra + 10}`)
// }
// else{
//     alert(`O valor do frete é 20 reais. Valor total = R$${valorCompra + 20 }`)
// }

//-----------------Acesso por idade-----------------------
// let idade = Number(prompt("Por favor informe sua idade: "));
// let temConvite = prompt("Você possui um convite?");

// if(idade >= 18 || temConvite === "sim"){

//     alert("Você pode entrar na festa. ")
// }
// else{
//     alert("Você não pode entrar na festa. ")
// }

//---------------Cálculo de IMC------------------------
// let altura = Number(prompt("Por favor informe sua altura: "));
// let peso = Number(prompt("Por favor informe seu peso: "));
// let calculoPeso = peso/ (altura*altura)
// console.log(calculoPeso)

// if(calculoPeso <= 50){
//     alert("Você está abaixo do peso.")
// }


