const botao = document.getElementById("btnCriar");

botao.addEventListener("click", criarConta);

function criarConta() {
  const input = document.getElementById("saldoInput");
  const erro = document.getElementById("erro");

  let valor = parseFloat(input.value);

  if (isNaN(valor) || valor <= 0) {
    erro.style.display = "block";
    erro.textContent = "Digite um valor válido maior que zero!";
    return;
  }

  // salva o saldo (opcional, mas MUITO útil)
  localStorage.setItem("saldo", valor);

  // redireciona para outra página
  window.location.href = "conta.html";
}