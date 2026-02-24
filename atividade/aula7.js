//1- Crie uma função que receba um número e retorne o dobro.  
console.log("---------------------------------------------------------------------------------------------------")
function dobro (n){
return n* 2;
}
console.log(dobro(20));
console.log("---------------------------------------------------------------------------------------------------")


//  2- Crie uma função que receba um número e retorne o triplo.  
function triplo (n){
return n* 3;
}
console.log(triplo(20));
console.log("---------------------------------------------------------------------------------------------------")

//  3- Crie uma função que receba dois números e retorne a soma. 
function somar (n1,n2){
return n1 + n2;
}
console.log(somar(4,4));
console.log("---------------------------------------------------------------------------------------------------")

// 4- Crie uma função que receba dois números e retorne a multiplicação.  
function multiplicação (n1,n2){
return n1 * n2;
}
console.log(multiplicação(4,4));
console.log("---------------------------------------------------------------------------------------------------")

//  5- Crie uma função que receba um valor em real e converta para dólar.
function realparaDolar(valorreal,cotação){
    return valorreal/ cotação
}
console.log(realparaDolar(20,5.17).toFixed(2))
console.log("---------------------------------------------------------------------------------------------------")

//  6- Crie uma função que receba um valor em dólar e converta para real.  
function Dolarparareal(valorreal,cotação){
    return valorreal/ cotação
}
console.log(Dolarparareal(20,0.19).toFixed(2))
console.log("---------------------------------------------------------------------------------------------------")

// 7- Crie uma função que receba um salário e calcule aumento de 10%.  

 function calcularamento(salario){
    return salario + (salario * 0.1)
}
console.log(calcularamento(810))
console.log("---------------------------------------------------------------------------------------------------")

//  8- Crie uma função que retorne se o número é par.

function calculo(numero){
    if (numero%2==0){
        return true;
    }else{
        return false;
    }
    
}
    console.log(calculo(4));
    console.log("---------------------------------------------------------------------------------------------------")

// 9- Crie uma função que imprima números de 1 até 10.  
function de1a10(){
for (let i = 1; i <= 10; i++){
        console.log(i);
}
}
console.log("---------------------------------------------------------------------------------------------------")
//  10- Crie uma função que receba um limite e imprima até ele.
function limite(impressao){
    for(let i=1; i<=impressao; i++){
        console.log(i)
    }
}
console.log(limite(8))
console.log("---------------------------------------------------------------------------------------------------")
//  11- Crie uma função que some todos os números até 10.  
function somaTOTAL(){
    let soma = 0;
    for (let i=1; i<=10; i++){
        soma += i;
    }
    return soma;
}
console.log(somaTOTAL());

console.log("---------------------------------------------------------------------------------------------------")
//  12- Crie uma função que conte quantos pares existem até 10.  
function pares(){
    let n = []
    for(let i=0;i<=10;i++){
        if(i%2 == 0){
            n.push(i)
        }
    }
    return n
}
console.log(pares())




console.log("---------------------------------------------------------------------------------------------------")
// 13- Crie uma função que exiba a tabuada de um número.  
function tabuada(numero2){
        for (let i = 1; i <= 10; i++){
            console.log(numero + "x" + i + "=" + (numero2))
        }
}
// Exercício 13 - Crie uma função que exiba a tabuada de um número
function tabuada(numberX){
    let r = numberX
    for(let q=1; q<=10; q++){
        numberX = r * q;
        console.log(numberX)
    }
    return ""
}
console.log(tabuada(4))
console.log("----------------------------------------------------------------------------")


// Exercício 14 - Crie uma função que faça contagem regressiva
function contagem(){
    let x = 10
    for(let i=1; i<=10; i++){
        console.log(x)
        x = x - 1;
    }
    return x
}
console.log(contagem())
console.log("----------------------------------------------------------------------------")



// Exercício 15 - Crie uma função que encontre o número 27
function encontrar(){
     for (let o = 1; o <= 28; o++) {
        if(o === 27){
            console.log(o)

        }
    }
}

// Exercício 16 - Crie uma função que some números pares até um limite
function contaPar(numberZ){
    let som = numberZ
    let par = 0
     for (let contar = 1; contar <= numberZ; contar++) {
        if (contar % 2 === 0) { // Verifica se é par
            som += contar
            console.log(som)
            par++
        }
  }
}
console.log(contaPar(12))
console.log("----------------------------------------------------------------------------")



// Exercício 17 - Crie uma função que conte números ímpares
function quantosImpares(){
    let impares = []
    for(let z=0; z<=10; z++){
        if(z%2 != 0){
            impares.push(z)
        }
    }
    return impares;
}
console.log(quantosImpares())
console.log("----------------------------------------------------------------------------")


// Exercício 18 - Crie uma função que retorne a média de dois números
function mediaDois(numberOne, numberTwo){
    return (numberOne/numberTwo)*2
}
console.log(mediaDois(9,6))
console.log("----------------------------------------------------------------------------")


// Exercício 19 - Crie uma função que retorne o quadrado de um número
function quadrado(aoquadrado){
    return aoquadrado*aoquadrado
}
console.log(quadrado(16))