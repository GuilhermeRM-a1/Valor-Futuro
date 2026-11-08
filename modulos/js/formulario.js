import { json, response } from "express";

const form = document.querySelector(".form-container form");


form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const renda = document.getElementById("renda").value;
    const objetivo = document.getElementById("objetivo").value;

    const dadosCliente = {
    nomeCompleto: nome,
    emailUsuario: email,
    telefoneUsuario: telefone,
    rendaMensal: renda,
    objetivoFinanceiro: objetivo
    };

    fetch('http://localhost:8080/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(dadosCliente)
    })
    

})

