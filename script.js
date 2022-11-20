
// As diferentes formas de função:

/* // Função nomeada - chamamos/executamos a função pelo nome dela.
function soma(num1, num2) {
    return num1 + num2
}

// Função anônima ou função não-nomeada (expressão de função) - não recebe um nome, é uma função dentro de uma variável. É chamada/executada através da variável.
const soma = function (num1, num2) {
    return num1 + num2
}

// Função de seta => | arrow function (expressão de função) - não recebe um nome, é uma função dentro de uma variável. É chamada/executada através da variável.
const soma = (num1, num2) => {
    return num1 + num2
}

//EXTRA: se o bloco de função tiver >SOMENTE UMA LINHA< pode-se omitir as chaves e o return e utilizar o "return implícito"
const soma = (num1, num2) => num1 + num2  */

// Prática - Declarando e chamando funções

// Declare uma função que imprima no console a frase "Olá Mundo!"
// Chame a função!

/* function olaMundo() {
    console.log('Olá Mundo!');
}

olaMundo() //chamada/execução/invocação da função */

//__________________________________________________________


/* Parâmetros e argumentos 

Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: 
  `Olá ${nome}`

Invoque esta função 3 vezes, passando 3 argumentos (nomes) diferentes

Extra: Refaça o exercício com a sintaxe de expressão de função (função não-nomeada) */

// Função nomeada

/* function olaPessoa(nome) { 
 console.log(nome);
}

olaPessoa('Renan') // o argumento é o conteúdo que vai ser impresso aqui na chamada da função
olaPessoa('Danielle')
olaPessoa('Silvana')
olaPessoa(757)
olaPessoa(true)
olaPessoa(false)
olaPessoa(7*7) 

o (nome) é um parâmetro que está sendo recebido e impresso. Se estiver no bloco da minha função pode ser invocado/executado qualquer conteúdo neste parâmetro, inclusive strings, boleanos, numeros. operadores aritméticos, etc. */

// Refatoração para uma expressão de função:

/* const nome = function (nome) { 
    console.log(nome)
}

nome('Renan Paiva') */

//_________________________________________________________


/* Retornando valores

Crie uma função que receba dois números e retorne a soma entre eles.

Guarde o retorno dessa função em uma variável e imprima no console.

Extra: Refaça o exercício com a sintaxe de Arrow Function.*/

/* // Função não-nomeada
const somaEx = function (num1, num2) {
    return num1 + num2
}

// Arrow function - utilizada com mais frequência
const soma = (num1, num2) => {
    return num1 + num2
}
//Nesse return estamos retornando a soma de num1 + num2 para quem chamar/invocar/executar a variável/função soma. Geralmente o return é utilizado para outras coisas, e não para imprimir no console.log.

const result = soma(5, 7)
console.log(result);
       // ou
console.log(soma(4, 6));
console.log(soma(2, 25));
console.log(soma(87, 97)); */


// o console.log imprime a função logo de cara quando for chamada.
// o return retorna o valor pra quem o chamou poder usá-lo em qualquer outro momento. Posso chamar a função do returno pelo console.log em qualquer outro momento. O aconselhável é sempre usar o return. 

//___________________________________________________


/* Unindo funções e arrays

Crie uma função que receba uma array de números e retorne um novo array apenas com o primeiro e último número. */

/* const numeros = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99] // Escopo global
const numeros1 = [10, 11, 22, 33, 44, 55, 66, 77, 88, 90] // Escopo global
const numeros2 = [20, 11, 22, 33, 44, 55, 66, 77, 88, 777] // Escopo global
const numeros3 = [30, 11, 22, 33, 44, 55, 66, 77, 88, 555] // Escopo global
const numeros4 = [40, 11, 22, 33, 44, 55, 66, 77, 88, 757] // Escopo global
const numeros5 = [50, 11, 22, 33, 44, 55, 66, 77, 88, 999] // Escopo global
const numeros6 = [60, 11, 22, 33, 44, 55, 66, 77, 88, 14577] // Escopo global

// Obs. A função é um código reutilizável. Nesse caso a função abaixo retornaPrimeiroEUltimo está executando todas as variáveis de arrays acima de uma só vez. Basta ver a impressão delas no console.log abaixo.

function retornaPrimeiroEUltimo (array) {
    const primeiro = array[0] // Primeiro número do array. Escopo local
    const ultimo = array[array.length - 1] // O array.length -1 é o formato mais utilizado para retornar o último número do array. 
    const novoArray = []

    novoArray.push(primeiro, ultimo)
    return novoArray
    
}

console.log(retornaPrimeiroEUltimo(numeros))
console.log(retornaPrimeiroEUltimo(numeros1))
console.log(retornaPrimeiroEUltimo(numeros2))
console.log(retornaPrimeiroEUltimo(numeros3))
console.log(retornaPrimeiroEUltimo(numeros4))
console.log(retornaPrimeiroEUltimo(numeros5))
console.log(retornaPrimeiroEUltimo(numeros6))
console.log(retornaPrimeiroEUltimo(true))
console.log(retornaPrimeiroEUltimo('Corinthians')) */ // Essa função vai trazer sempre o valor do primeiro e último índice do que eu passar pra ela, mesmo que seja uma string. Nesse caso da string Corinthians me trouxe a letra C e s. No caso de boleanos retorna undefined porque boleanos não tem índices de arrays. 

//__________________________________________________________


/* Unindo funções, arrays, condicionais e laços

- Agora, vamos unificar nossos conhecimentos.
- Crie uma função que receba um array de números como parâmetro e retorne um novo array apenas com os números pares.*/

/* const numeros = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99]

const somentePares = (array) => {
    const novoArray = []

    for(let numero of array) { // Usamos for..of pq o índice aqui não importa, só preciso dos valores.
       if(numero % 2 === 0) {
    // if(numero % 2 === 1) { // Se o resto da divisão do 2 for igual a zero sempre me trará números pares, e se o resto da divisão do 2 for igual a 1 sempre me trará números ímpares, simples assim.
            novoArray.push(numero) // Depois que ele percorrer todos os números do array que pedi no for of, ele vai adicionar nessa variável novoArray vazia somente os números pares ou ímpares do array percorrido, conforme eu pedi no if.

        } 

    } 

   return novoArray // retorno o novo array fora do laço.
}

   console.log(somentePares(numeros)); // chamo somentePares, que é minha função, passando numeros. Se eu tivesse vários arrays lá em cima funcionaria da mesma forma com essa função. */

   //_________________________________________________


   // Também podemos fazer dessa forma para chamarmos/invocarmos/executarmos os números pares ou impares do array, porém não é o ideal colocar mais de uma coisa dentro da função, como o else por exemplo, porque se debugar (acontecer algum problema), é mais difícil localizar o erro dentro da função. O ideal é cada função rodar somente uma coisa de cada vez.  

   /* const numeros = [00, 11, 22, 33, 44, 55, 66, 77, 88, 92]
   const numeros1 = [03, 11, 22, 33, 44, 55, 66, 77, 88, 94]
   const numeros2 = [05, 11, 22, 33, 44, 55, 66, 77, 88, 96]
   const numeros3 = [07, 11, 22, 33, 44, 55, 66, 77, 88, 98]
   const numeros4 = [09, 11, 22, 33, 44, 55, 66, 77, 88, 100] // Posso adicionar quantos arrays precisar, a mesma função vai valer para todos, basta identificar cada um desses arrays na chamada da função no console.log

const parOuImpar = (array) => {
    const arrayPares = []
    const arrayImpares = []

    for(let numero of array) { 
       if(numero % 2 === 1) {
            arrayPares.push(numero) 
        } else {
            arrayImpares.push(numero)
        }
      } 

   return arrayPares
   return arrayImpares
}

   console.log(parOuImpar(numeros)); 
   console.log(parOuImpar(numeros1)); 
   console.log(parOuImpar(numeros2)); 
   console.log(parOuImpar(numeros3)); 
   console.log(parOuImpar(numeros4)); */

  /*  Existem duas formas de imprimir o resultado: retorná-la com o return e colocar a chamada da função dentro do console.log, como no exercício acima - console.log(parOuImpar(numeros)) - ou então colocar o resultado dentro de uma variável e imprimir a variável. 
   
   Ex.   const result = retornaPrimeiroEUltimo (numeros)
   console.log(result);

   Aqui na chamada da função eu estou identificando o array que eu quero chamar, que nesse caso é o array numeros.

   Obs. Nessa função basta eu mudar para 0 ou 1 o número que é igual ao resto da divisão dentro do if, na linha 174, para puxar números pares ou impares do array. */

//__________________________________________________

   /* Pra guardar na cabeça

   Declare uma função que: 
   - Receba um array de números;
   - Retorne um novo array com dois elementos:
     - o último e o primeiro número do array recebido divididos por dois. 
   - Chame a função com 2 arrays diferentes */

   const sequencia = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90]

   const sequencia1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1000]

   const primeiroEUltimoNum = (array) => {
    const primeiro = array[0] /2 
    const ultimo = array[array.length -1] /2
    const novoArray = [] 

    novoArray.push(primeiro, ultimo)
    
    return novoArray 
}

   console.log(primeiroEUltimoNum(sequencia));
   console.log(primeiroEUltimoNum(sequencia1));


