    //--------------- Exercício 1 --------------//

    function PegarComanda (){
        console.log('Opa meu bom, boa noite!')
        console.log('Como estais, tranquilo?')
        console.log('Felicidades para ti meu querido.')
        console.log('prazer em lhe conhecer!')
    }

    PegarComanda();


//--------------- Exercício 2 --------------//

    function CalcularQuadrado (NumeroDaVez) {
        console.log(`O número da vez é o ${NumeroDaVez}`);
        console.log(`O número da vez ${NumeroDaVez} ao quadrado vale ${NumeroDaVez ** 2}`);
    }

    CalcularQuadrado(2)


    //--------------- Exercício 3 --------------//

    function RaizQuadrada(base) {
        base**(1/2);
        console.log(base**(1/2));
    }
RaizQuadrada(49)

     //--------------- Exercício 4 --------------//

     function Bhaskara(a, b, c) {
        const delta = b ** 2 - 4 * a * c;
        const x1 = (-b + RaizQuadrada(delta)) / (2 * a);
        const x2 = (-b - RaizQuadrada(delta)) / (2 * a);

        console.log(`Os dois valores de X dos pontos da parábola no eixo X são ${x1} e ${x2}`);
     }

     function RaizQuadrada(base) {
        return base ** (1/2);
     }

     Bhaskara(2, 3, -2)