if(!localStorage.getItem("conta"))
function getSaldo() {
  let saldo = parseFloat(localStorage.getItem("saldo"));
let historico = JSON.parse(sessionStorage.getItem("historico")) || [];
}

function atualizarSaldo(){
document.getElementById("saldo")
.innerText="R$ "+conta.saldo.toFixed(2).replace(".",",");
}

function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


if (!localStorage.getItem("saldo")) {
  alert("Crie uma conta primeiro!");
  window.location.href = "index.html";
}


let saldo = parseFloat(localStorage.getItem("saldo"));
let historico = JSON.parse(sessionStorage.getItem("historico")) || [];


function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


function atualizarSaldo() {
  document.getElementById("saldo").innerText = formatar(saldo);
}


let visivel = true;

function toggleSaldo() {
  const el = document.getElementById("saldo");

  if (visivel) {
    el.innerText = "••••••";
  } else {
    atualizarSaldo();
  }

  visivel = !visivel;
}


document.querySelector(".depositar").addEventListener("click", () => {
  let valor = parseFloat(document.querySelector(".valor").value);

  if (!valor || valor <= 0) {
    alert("Valor inválido");
    return;
  }

  saldo += valor;
  historico.unshift(`💰 Depósito: + ${formatar(valor)}`);

  salvar();
});


document.querySelector(".pix").addEventListener("click", () => {
  let valor = parseFloat(document.querySelector(".valor").value);

  if (!valor || valor <= 0) {
    alert("Valor inválido");
    return;
  }

  if (valor > saldo) {
    alert("Saldo insuficiente");
    return;
  }

  saldo -= valor;
  historico.unshift(`💸 PIX: - ${formatar(valor)}`);

  salvar();
});


function salvar() {
  localStorage.setItem("saldo", saldo);
  sessionStorage.setItem("historico", JSON.stringify(historico));

  atualizarSaldo();
  mostrarHistorico();

  document.querySelector(".valor").value = "";
}


function mostrarHistorico() {
  const area = document.getElementById("historico");
  area.innerHTML = "";

  historico.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerText = item;
    area.appendChild(div);
  });
}


atualizarSaldo();
mostrarHistorico();