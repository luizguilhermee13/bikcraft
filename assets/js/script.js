//colocando subrilhado nos links ativos
const links = document.querySelectorAll(".header-menu a");

function subrilharAtivo(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(subrilharAtivo);

//ativando items ativos em orcamento.html

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametros) {
  const parametroAtivado = document.getElementById(parametros);

  if (parametroAtivado) {
    parametroAtivado.checked = true;
    parametroAtivado.click();

    const label = document.querySelector(`label[for="${parametros}"]`);
    if (label) {
      label.style.background = "#ffffff";
      label.style.color = "#000000";
    }
  }
}

parametro.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function selecaoPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(selecaoPergunta);

//trocando imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function Galeria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(Galeria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
