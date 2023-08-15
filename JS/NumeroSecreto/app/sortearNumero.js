const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio(maiorValor)
console.log('O número secreto é: ' + numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio(maiorValor) {
    return parseInt(Math.random() * maiorValor + 1)
}