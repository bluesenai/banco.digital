const botao = document.getElementById("criar");

botao.addEventListener("click", function () {

  const input = document.getElementById("saldoInput");
  const valor = parseFloat(input.value);

  if (isNaN(valor) || valor < 0) {
    alert("Digite um valor válido!");
    return;
  }

  localStorage.setItem("saldo", valor);


  sessionStorage.setItem("historico", JSON.stringify([]));

console.log("Indo para conta.html...");

  window.location.href = "conta.html";
});