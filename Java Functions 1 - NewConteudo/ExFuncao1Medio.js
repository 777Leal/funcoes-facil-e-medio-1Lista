 //--------------- Exercício 1 --------------//

function palindromo (string) {
    let replace = /[W_]/g;
    let SemCapsLok = string.toLowerCase().replace(replace,'');
    let ReverseString = SemCapsLok.split('').reverse().join('');
    if (ReverseString === SemCapsLok) {
        console.log(true)
    } else {
        console.log(false)
    }
}


 //--------------- Exercício 2 --------------//

function fatorial(num) {
if (num < 0) {
    return -1;
} else if (num == 0) {
    return 1;
} else {
    return (num * fatorial(num - 1));
}
}
console.log(fatorial(5))


 //--------------- Exercício 3 --------------//

 function filtraPares(array) {
 var pares = array.filter(number => number % 2 === 0);
 var ímpares = array.filter(number => number % 2 !== 0);
  return { pares, ímpares };
}

  var Numeros = [1, 2, 3, 4, 5];
  var resultado = filtraPares(Numeros);
  console.log(resultado)
 

//--------------- Exercício 4 --------------//

function contaVogais(texto) {
    console.log(texto.match(/[aeiou]/gi).length);
}
 contaVogais(`Rogério mecânico`)


 //--------------- Exercício 5 --------------//

 function ordenaStrings (ordem) {
    return ordem.split('').sort().join(' ');
 }
 console.log(ordenaStrings("limão"));


 //--------------- Exercício 6 --------------//