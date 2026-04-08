// ======================
// CRIAR CONTA PADRÃO
// ======================

if(!localStorage.getItem("conta")){
    const conta={
        saldo:2500,
        historico:[]
    };

    localStorage.setItem("conta",JSON.stringify(conta));
}

let conta = JSON.parse(localStorage.getItem("conta"));


// ======================
// MOSTRAR SALDO
// ======================

function atualizarSaldo(){
document.getElementById("saldo")
.innerText="R$ "+conta.saldo.toFixed(2).replace(".",",");
}

atualizarSaldo();


// ======================
// MOSTRAR / OCULTAR SALDO
// ======================

let visivel=true;

function toggleSaldo(){

const saldo=document.getElementById("saldo");

if(visivel){
saldo.innerText="••••••";
visivel=false;
}else{
atualizarSaldo();
visivel=true;
}

}


// ======================
// DEPOSITAR
// ======================

document.querySelector(".depositar")
.addEventListener("click",()=>{

let valor=parseFloat(document.querySelector(".valor").value);

if(!valor || valor<=0){
alert("Digite um valor válido");
return;
}

conta.saldo+=valor;

conta.historico.unshift(`💰 Depósito: + R$ ${valor.toFixed(2)}`);

salvar();
});


// ======================
// PIX
// ======================

document.querySelector(".pix")
.addEventListener("click",()=>{

let valor=parseFloat(document.querySelector(".valor").value);

if(!valor || valor<=0){
alert("Digite um valor válido");
return;
}

if(valor>conta.saldo){
alert("Saldo insuficiente");
return;
}

conta.saldo-=valor;

conta.historico.unshift(`💸 Saque: - R$ ${valor.toFixed(2)}`);

salvar();
});


// ======================
// SALVAR DADOS
// ======================

function salvar(){

localStorage.setItem("conta",JSON.stringify(conta));

atualizarSaldo();
mostrarHistorico();

document.querySelector(".valor").value="";
}


// ======================
// MOSTRAR HISTÓRICO
// ======================

function mostrarHistorico(){

const area=document.getElementById("historico");

area.innerHTML="";

conta.historico.forEach(item=>{

const div=document.createElement("div");
div.classList.add("item");
div.innerText=item;

area.appendChild(div);

});

}

mostrarHistorico();