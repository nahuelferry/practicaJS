var num; //declaracion de variable
var maxNum=25; //declaracion e inicializacion de variable
var cadana="Buenas noches";





console.log(typeof maxNum);
console.log(typeof cadena);


num=29;
var num2="29";
var num3="8";

console.log(num+num2);
console.log(num2+num3);
console.log(num3-num2);
console.log(num*num2);
console.log(num2**num2);//potencia
console.log(num/num2); 
console.log(num%num2);//modulo
console.log(num/num2); 

/*var valor=parseInt(prompt("ingrese un número")); //persetint es para castear a enteros
var valor2=parseInt(prompt("ingrese un número")); //persetint es para castear a enteros

console.log(valor*valor2);
*/

//num=29  num2= "29" (cadena) 

console.log(num==num2); //comparacion de valores
console.log(num===num2); //compara, o se fija el tipo de dato
console.log(num>30); //falso
console.log(num<=29); //verdadero

//num=29 num2=5
console.log(num<30 && num2>3); //verdadero y verdadero = true
console.log(num>29 && num2>3); //falso y verdadero = falso
console.log(!(num<29) || (num>3)); //verdadero y verdadero=verdadero , tiene negacion
console.log(!((num<29) && (num>3)));
//num=29 num2=29 (cadena)

console.log(num!=num2);//falso, se fija el tipo (diferente)
console.log(num!==num2);// verdadero, se fija solo el valor (estrictamente diferente)

//preincremento y postincremento ++

var valor4=20;

console.log(valor4++); //a valor4 le tengo que sumar 1, en la siguiente linea, o en el proximo uso de valor4, en esa linea queda con valor 20
console.log(valor4); //21
console.log(++valor4); //a valor4 le sumo 1 antes, es decir queda en 22 en esta linea
console.log(valor4); //22

console.log(--valor4); //21
console.log(valor4); //21
console.log(valor4--); //21
console.log(valor4); //20

const IVA=21;  //a las constantes no se le puede cambiar el valor

IVA=15; // LARGA ERROR!!

console.log(IVA); //LARGA ERROR!!


