var nome = "Alan Vitor de Assis"; // 1. serve para dar inicio as funções
var cargo = "CTO - Growdev";

var nomeHtml = document.getElementById("nome-no-html"); // 1.1 tags para pegar elementos do html
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){ // 1.2 função para alterar um nome 
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos() {   //função para o botão projetos abrir no console do devtool
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no botão sobre?");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome); // 1.3 variavel pra chamar uma função
colocarCargoNoHtml(cargo);
