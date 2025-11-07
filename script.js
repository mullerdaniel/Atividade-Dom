function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const listaFontes = [
    'Roboto, sans-serif',
    'Open Sans, sans-serif',
    'Lato, sans-serif',
    'Montserrat, sans-serif',
    'Oswald, sans-serif',
    'Poppins, sans-serif',
    'Merriweather, serif',
    'Playfair Display, serif',
    'Pacifico, cursive',
    'Indie Flower, cursive',
    'Permanent Marker, cursive',
    'Bebas Neue, cursive',
    'Fjalla One, sans-serif',
    'Quicksand, sans-serif',
    'Lora, serif'
];

function selecionarFonteAleatoria() {
    const indice = Math.floor(Math.random() * listaFontes.length);
    return listaFontes[indice];
}

let contador = 0;
const pTexto = document.getElementById('texto');
const btnAumentar = document.querySelector('.botao-aumentar button');
const btnDiminuir = document.querySelector('.botao-diminuir button');

const body = document.body;
const h1Titulo = document.querySelector('.titulo');
const pParagrafo = document.getElementById('texto');

const btnCorFundo = document.querySelector('.botao-alterar-cor-fundo button');
const btnCorTitulo = document.querySelector('.botao-alterar-cor-titulo button');
const btnCorParagrafo = document.querySelector('.botao-alterar-cor-paragrafo button');
const btnFonteTitulo = document.querySelector('.botao-alterar-fonte-titulo button');

const btnFonteParagrafo = document.querySelector('.botao-alterar-fonte-paragrafo button');
const btnAlterarTudo = document.querySelector('.botao-alterar-tudo button');


function aumentarContador() {
    contador++;
    pTexto.textContent = contador;
}

function diminuirContador() {
    contador--;
    pTexto.textContent = contador;
}

function alterarCorFundo() {
    body.style.backgroundColor = gerarCorAleatoria();
}

function alterarCorTitulo() {
    h1Titulo.style.color = gerarCorAleatoria();
}

function alterarCorParagrafo() {
    pParagrafo.style.color = gerarCorAleatoria();
}

function alterarFonteTitulo() {
    h1Titulo.style.fontFamily = selecionarFonteAleatoria();
}

function alterarFonteParagrafo() {
    pParagrafo.style.fontFamily = selecionarFonteAleatoria();
}

function alterarTudo() {
    alterarCorFundo();
    alterarCorTitulo();
    alterarCorParagrafo();
    alterarFonteTitulo();
    alterarFonteParagrafo();
}

btnAumentar.addEventListener('click', aumentarContador);
btnDiminuir.addEventListener('click', diminuirContador);

btnCorFundo.addEventListener('click', alterarCorFundo);
btnCorTitulo.addEventListener('click', alterarCorTitulo);
btnCorParagrafo.addEventListener('click', alterarCorParagrafo);

btnFonteTitulo.addEventListener('click', alterarFonteTitulo);

if (btnFonteParagrafo) {
    btnFonteParagrafo.addEventListener('click', alterarFonteParagrafo);
}

if (btnAlterarTudo) {
    btnAlterarTudo.addEventListener('click', alterarTudo);
}