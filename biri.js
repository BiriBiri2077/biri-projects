
//creating an object
let Biri = {
    nome : "Josué",
    idade : 17,
    altura : 1.75, 
}
console.log(Biri);

let Seven = {
    nome: "Guilherme",
    idade: 13,
    altura: 1.65,
}
console.log(Seven);

let Trasheyy = {
    nome: "Cauã",
    idade: 16,
    altura: 1.82,
}
console.log(Trasheyy);


// let examples
let nome = Trasheyy;
let idade = 17;
let altura = 1.75;

if (altura <= 17) {
console.log('bom dia');
}

// functions if...
function resetaCor(){
    corSite = " Braço ";
}
resetaCor();

if (nome = 'BiriBiri');
console.log(corSite);

if(idade = 17);
console.log('osu');

if(nome = 'Trasheyy');
console.log('sos');


//function that shows the biggest between both

let valorMaior = max(16,17,21);
console.log(valorMaior);

function max(numero1,numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}
//or
let valorMaior = max(22,17);
console.log(valorMaior);

function max(numero1,numero2) {
     return numero1>numero2 ? numero1: numero2 ;
}

//FizzBuzz
const resultado = fizzBuzz(4);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'nao é um número';
    if (entrada % 2 === 0 && entrada % 4 === 0)
        return 'FizzBuzz';
    if (entrada % 2 === 0)
        return 'Fizz';
    if (entrada % 4 === 0)
        return 'Buzz';
    return entrada;
}

// Velocidade maxima de 70
// a cada 5km 1 ponto na carteira
//math.floor
// caso pontos maior 12 carteira suspensa
verificarVelocidade(77);

function verificarVelocidade(velocidade) {
    const KmPorPonto = 5;
    const velocidadeMaxima = 70;
    if ( velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto))
        if(pontos >= 12)
            console.log('carteira suspensa');
        else
            console.log('Pontos',pontos);
    }
}
