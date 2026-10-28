let saldo = 1000;
const deposito = document.getElementById("depositar");
const saque = document.getElementById("sacar");
const elemento = document.getElementById("saldo");
elemento.textContent = saldo;

function depositar() {
const valor = parseFloat(document.getElementById("valor").value);
const extrato = document.getElementById("extrato");
    
    if (valor <= 0) {
        alert("Valor inválido. Digite um valor positivo.");
    } else {
        saldo += valor;
    elemento.textContent = saldo;
    }

    extrato.textContent = `${valor} adicionado com sucesso! Saldo atual: R$ ${saldo}`;
}

function sacar() {
    const valorsaque = parseFloat(document.getElementById("valorsaque").value);
    const extrato = document.getElementById("extrato");
    if (valorsaque <= 0) {
        alert("Valor inválido. Digite um valor positivo.");
    } else {
        saldo -= valorsaque;
        elemento.textContent = saldo;
        extrato.textContent = `${valorsaque} sacado com sucesso! Saldo atual: R$ ${saldo}`;
    }
}