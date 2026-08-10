function mostrarBikecraft() {
  document.getElementById("orcamento-bikcraft").style.display = "grid";
  document.getElementById("orcamento-seguro").style.display = "none";
}

function mostrarSeguro() {
  document.getElementById("orcamento-seguro").style.display = "grid";
  document.getElementById("orcamento-bikcraft").style.display = "none";
}

function mostrarNimbus() {
  document.getElementById("nimbus1").style.display = "grid";
  document.getElementById("magic1").style.display = "none";
  document.getElementById("nebula1").style.display = "none";
}

function mostrarMagic() {
  document.getElementById("magic1").style.display = "grid";
  document.getElementById("nimbus1").style.display = "none";
  document.getElementById("nebula1").style.display = "none";
}
function mostrarNebula() {
  document.getElementById("nebula1").style.display = "grid";
  document.getElementById("nimbus1").style.display = "none";
  document.getElementById("magic1").style.display = "none";
}
