const umElement = document.querySelector('input#um')
const doisElement = document.querySelector('input#dois')
const tresElement = document.querySelector('input#tres')
const quatroElement = document.querySelector('input#quatro')
const cincoElement = document.querySelector('input#cinco')
const seisElement = document.querySelector('input#seis')
const seteElement = document.querySelector('input#sete')
const oitoElement = document.querySelector('input#oito')
const noveElement = document.querySelector('input#nove')
const zeroElement = document.querySelector('input#zero')

const somaButton = document.querySelector('input#soma')
const subtracaoButton = document.querySelector('input#subtracao')
const divisaoButton = document.querySelector('input#divisao')
const multiplicacaoButton = document.querySelector('input#multiplicacao')
const igualButton = document.querySelector('input#igual')

const contaEscrita = document.querySelector('div#contaEscrita')
const resultado = document.querySelector('div#resultado')

let numeros = ['']
let valorFinal
let tipoOperacao
function escreve1(){
    contaEscrita.innerHTML += `1`
    numeros[numeros.length - 1] += `1` 
}
function escreve2(){
    contaEscrita.innerHTML += `2`
    numeros[numeros.length -1] += `2` 
}
function escreve3(){
    contaEscrita.innerHTML += `3`
    numeros[numeros.length -1] += `3` 
}
function escreve4(){
    contaEscrita.innerHTML += `4`
    numeros[numeros.length -1] += `4` 
}
function escreve5(){
    contaEscrita.innerHTML += `5`
    numeros[numeros.length -1] += `5` 
}
function escreve6(){
    contaEscrita.innerHTML += `6`
    numeros[numeros.length -1] += `6` 
}
function escreve7(){
    contaEscrita.innerHTML += `7`
    numeros[numeros.length -1] += `7` 
}
function escreve8(){
    contaEscrita.innerHTML += `8`
    numeros[numeros.length -1] += `8` 
}
function escreve9(){
    contaEscrita.innerHTML += `9`
    numeros[numeros.length -1] += `9` 
}
function escreve0(){
    contaEscrita.innerHTML += `0`
    numeros[numeros.length -1] += `0` 
}

umElement.onclick = escreve1
doisElement.onclick = escreve2
tresElement.onclick = escreve3
quatroElement.onclick = escreve4
cincoElement.onclick = escreve5
seisElement.onclick = escreve6
seteElement.onclick = escreve7
oitoElement.onclick = escreve8
noveElement.onclick = escreve9
zeroElement.onclick = escreve0


function adicionar(){
    numeros.push('')
    contaEscrita.innerHTML += ' + '
    tipoOperacao = 1
}

function subtrair(){
    numeros.push('')
    contaEscrita.innerHTML += ' - '
    tipoOperacao = 2
}

function dividir(){
    numeros.push('')
    contaEscrita.innerHTML += ' / '
    tipoOperacao = 3
}

function multiplicar(){
    numeros.push('')
    contaEscrita.innerHTML += ' x '
    tipoOperacao = 4
}

function mostraResultado (){
    if (tipoOperacao === 1) {
        valorFinal = Number(numeros[0]) + Number(numeros[1])
    } else if (tipoOperacao === 2) {
        valorFinal = Number(numeros[0]) - Number(numeros[1])
    } else if (tipoOperacao === 3) {
        valorFinal = Number(numeros[0]) / Number(numeros[1])        
    } else if (tipoOperacao === 4) {
        valorFinal = Number(numeros[0]) * Number(numeros[1])
    } else {
        alert("Algo de errado não esta certo")
    }
    resultado.innerHTML = valorFinal
}



igualButton.onclick = mostraResultado
multiplicacaoButton.onclick = multiplicar
divisaoButton.onclick = dividir
somaButton.onclick = adicionar
subtracaoButton.onclick = subtrair


