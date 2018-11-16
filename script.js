
//creo un ciclo "for" per stampare i numeri da 1 a 100

for (var i = 1; i < 101; i++) {
   document.writeln(i + '<br>');

//determino la condizione tale che se il numero è
//un multiplo di 3 scrivi fizz,
//se è un multiplo di 5 scrivi buzz,
//se è sia un multiplo di 3 che di 5 quindi (3x5)=15 scrivi fizzbuzz

if (i % 3 ==0){
  console.log("fizz");
}
else if (i % 5 ==0){
  console.log("buzz");
}
else if (i % 15 ==0){
  console.log("fizzbuzz")
}
else {
  console.log(i);
}
}
