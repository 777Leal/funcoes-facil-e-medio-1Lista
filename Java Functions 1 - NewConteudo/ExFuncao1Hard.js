//--------------- Exercício 1 --------------//
function contaOcorrencias(palavra, texto) {
   
    const palavras = texto.split(/\s+/); 

    const ocorrencias = palavras.filter(p => p.toLowerCase() === palavra.toLowerCase());

    return ocorrencias.length;
}
const texto = "A palavra JavaScript aparece em JavaScript e é uma linguagem de programação JavaScript.";
const palavra = "JavaScript";
const numeroOcorrencias = contaOcorrencias(palavra, texto);

console.log(`A palavra "${palavra}" aparece ${numeroOcorrencias} vezes no texto.`);


//--------------- Exercício 2 --------------//

function encontraNome(letra, nomes) {

    return nomes.find(nome => nome.startsWith(letra));
}

const listaNomes = ["Alice", "Bruno", "Carlos", "Ana", "Eduardo"];
const letra = "A";
const nomeEncontrado = encontraNome(letra, listaNomes);

console.log(nomeEncontrado); 

//--------------- Exercício 3 --------------//

const ida = [18, 25, 21, 12, 14];

function mediaIdades(ida) {
    if (ida.length === 0) return 0; 
    const soma = ida.reduce((acc, idade) => acc + idade, 0);
    return soma / ida.length;
}


const me = mediaIdades(ida);
console.log(me); 

//--------------- Exercício 4 --------------//

function removeDuplicatas(itens) {
    const itensUnicos = new Set(itens);

    
    return Array.from(itensUnicos);
}

const list = ["jefferson", "agia", "prado", "jefferson", "nadia", "prado"];
const listaSemDuplicatas = removeDuplicatas(list);

console.log(listaSemDuplicatas); 

//--------------- Exercício 5 --------------//

function ordenaPorPreco(produtos) {

    return produtos.sort((a, b) => a.preco - b.preco);
}

let listaProdutos =[
{ nome: "Produto A", preco: 20 },
{ nome: "Produto B", preco: 50 },
{ nome: "Produto C", preco: 90 },
{ nome: "Produto D", preco: 15 },];
let produtosOrdenados = ordenaPorPreco(listaProdutos);

console.log(produtosOrdenados);