var x =5; // numeros inteiros
var y = 6; // numeros decimais
var z = x + y; // calculos aritméticos
console.log("Valor de x: ", x, "Valor de Y: ", y, "Valor de Z: ", z,)

//var - let - const

var nome = "john doe";
var nome = "jose";
// representação do erro

let name = "john doe";
let name = "john doe"; //SyntaxError: "Name" has already been declared

{
    let x = 2
}
console.log(x);
//não pode ser utilizado fora do escopo

{
    var x = 2;
}
//x pode ser utilizado aqui
console.log(x);

//? Como iso pode impactar nooso código
var x = 10
// Aqui o X = 10
{
    var x = 2;
    // Aqui o X = 2
}
// Aqui o X = 2

//! Com a LET
var x = 10
// Aqui o X = 10
{
    var x = 2;
    // Aqui o X = 2
    console.log(x);
}
console.log(x);
// Aqui o X = 10

//! CONST
const pi = 3.141592
pi = 3.15; //Error
const pi = 3.16; //Error

//! Operador de Atribuição "="
let num = 2; //atribuindo o valor de 2
num == 3; //verifica se o valor num é igual a 3
console.log(num == 3); //false
console.log(num == 2); //true