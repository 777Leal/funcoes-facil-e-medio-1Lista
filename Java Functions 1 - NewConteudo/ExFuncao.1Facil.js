 //--------------- Exercício 1 --------------//

function saudacao (){
    console.log('Olá, lhe desejo Saudações!');
}

saudacao();


 //--------------- Exercício 2 --------------//
 function Soma (Somar2Numbers) {
    console.log(`O número da vez ${Somar2Numbers}, somando ele a ele mesmo, resulta em: ${Somar2Numbers+Somar2Numbers}`);
}

Soma(7);


 //--------------- Exercício 3 --------------//

function ParOuImpar(a) {
 if (a % 2 === 0) {
    console.log(`O número ${a} é par.`);
 } else {
    console.log(`O número ${a} é impar.`);
 }
}
ParOuImpar(4);


 //--------------- Exercício 4 --------------//

 function Multiplicar (OptionA, OptionB) {
 const Multiplicar = (OptionA * OptionB)
 
console.log(`O resultado da multiplicação de ${OptionA} e ${OptionB} é ${Multiplicar}`);
 }

Multiplicar (34, 55);


 //--------------- Exercício 5 --------------//

 function Conversão (C){
    return C*1.8+32
    
 }

 console.log(Conversão(17));


  //--------------- Exercício 6 --------------//

function CalcularMedia (Num1, Num2, Num3) {
    return ((Num1 + Num2 + Num3) /3);
}
console.log(CalcularMedia(22, 17, 1));


  //--------------- Exercício 7 --------------//

  function MinEmSeg (minutos){
    return (60 * minutos)
  }
  console.log(MinEmSeg(10));

    //--------------- Exercício 8 --------------//

    function ehPositivo (PositiveOrNegative){
        if (PositiveOrNegative > 0) {
            return "positivo"
        } else {
        return "negativo"
    }
     }
     console.log(ehPositivo(-5));


    //--------------- Exercício 9 --------------//

    function repetePalavra (PalavraENumero) {
            return PalavraENumero.repeat(3)
         }

    console.log(repetePalavra("Linguini "))


//--------------- Exercício 10 --------------//

function CalcularAreaTriangulo (Altura, Base) {
    return Altura * Base 
}
console.log(CalcularAreaTriangulo(10, 5));