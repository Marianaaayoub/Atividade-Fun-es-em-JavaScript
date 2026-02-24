//1- Crie uma função que receba um número e retorne o dobro.  
function dobro (n){
return n* 2;
}
console.log(dobro(20));

//  2- Crie uma função que receba um número e retorne o triplo.  
function triplo (n){
return n* 3;
}
console.log(triplo(20));

//  3- Crie uma função que receba dois números e retorne a soma. 
function somar (n1,n2){
return n1 + n2;
}
console.log(somar(4,4));

// 4- Crie uma função que receba dois números e retorne a multiplicação.  
function multiplicação (n1,n2){
return n1 * n2;
}
console.log(multiplicação(4,4));

//  5- Crie uma função que receba um valor em real e converta para dólar.
function realparaDolar(valorreal,cotação){
    return valorreal/ cotação
}
console.log(realparaDolar(20,5.17).toFixed(2))

//  6- Crie uma função que receba um valor em dólar e converta para real.  
function Dolarparareal(valorreal,cotação){
    return valorreal/ cotação
}
console.log(Dolarparareal(20,0.19).toFixed(2))

// 7- Crie uma função que receba um salário e calcule aumento de 10%.  

 function calcularamento(salario){
    return salario + (salario * 0.1)
}
console.log(calcularamento(810))

//  8- Crie uma função que retorne se o número é par.

function calculo(numero){
    if (numero%2==0){
        return true;
    }else{
        return false;
    }
    
}
    console.log(calculo(4));

// 9- Crie uma função que imprima números de 1 até 10.  
function de1a10(){
for (let i = 1; i <= 10; i++){
        console.log(i);
}
}

//  10- Crie uma função que receba um limite e imprima até ele.

//  11- Crie uma função que some todos os números até 10.  
function somaTOTAL(){
    let soma = 0;
    for (let i=1; i<=10; i++){
        soma += i;
        return soma;
    }
    console.log(somaTOTAL());
}
//  12- Crie uma função que conte quantos pares existem até 10.  

// 13- Crie uma função que exiba a tabuada de um número.  

//14- Crie uma função que faça contagem regressiva.

//  15- Crie uma função que encontre o número 27.  

// 16- Crie uma função que some números pares até um limite.

//  17- Crie uma função que conte números ímpares.  

//  18- Crie uma função que retorne a média de dois números.  

//  19- Crie uma função que retorne o quadrado de um número.  
 

