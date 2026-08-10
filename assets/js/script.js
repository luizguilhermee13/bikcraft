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
