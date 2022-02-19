//Exercicio fizzbuzz (JavaEloquent)
//console.log('FizzBuzz ex');

// fizz = "fizz"; //divisíveis de 3 e apenas 3
// buzz = "buzz"; //divisíveis de 5 e apenas 5
// fizzbuzz = "fizzbuzz";

// //Laço de repetição com os 100 números
//  for (let i = 0; i <= 100; i++) {
//    if (i%3 == 0 & i%5 == 0){ //lógica para imprimir fizzbuzz (divisíveis de 3 e 5)
//      console.log(fizzbuzz);
//    }else if (i%5 == 0 && i%3 != 0){ //lógica para imprimir buzz (divisíveis apenas de 5)
//      console.log(buzz);
//    }else if (i%3 == 0) { //lógica para imprimir fizzbuzz (divisíveis apenas de 3)
//      console.log(fizz)
//    }else{
//      console.log(i); //Impressão do restante dos números de 1-100
//    }
//  }

console.log('FizzBuzz ex');

numero = 0;
const fizzbuzz = numero%3 == 0 && numero%5 == 0;
const fizz = numero%3 == 0 && numero%5 != 0;
const buzz = numero%3 != 0 && numero%5 == 0;

for (i = 0; i<100; i++) {
  numero += numero +1;
    if (numero == fizz){
      console.log("fizz");
    }else if(numero == buzz){
      console.log("buzz");
    }else if (numero && fizzbuzz){
      console.log("fizzbuzz");
    }else {
      console.log(i);
    }
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
