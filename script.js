
// AUMENTAR A QUANTIDADE DE UM VALOR E DIMINUIR A QUANTIDADE DE UM VALOR NA CAIXA DE TEXTO
let contador = 0;

const caixaTexto = document.getElementById("texto");
const botaoAumentar = document.querySelector(".botao-aumentar");
const botaoDiminuir = document.querySelector(".botao-diminuir");

function atualizarContadorNaTela() {
    caixaTexto.textContent = contador;
}


botaoAumentar.addEventListener('click', () => {
    contador++;
    atualizarContadorNaTela();
});

botaoDiminuir.addEventListener('click', () => {
    contador--;
    atualizarContadorNaTela();
});

atualizarContadorNaTela();