const welcome = document.getElementById("welcome");

welcome.innerHTML = "Hello world!";

// criar uma funcao que aceite uma list de nomes 
// e crie uma list no html com todos os nomes

const nomes = [
    "Anna", 
    "John", 
    "Mary"
]

const criarListaDeNomes = (listaDeNomes) => {
 const novaLista=document.createElement('ul') 
 for(let i = 0; i <= listaDeNomes.length - 1; i++) { 
    const novoElemento = document.createElement('li')
    novoElemento.innerText = listaDeNomes[i];
    novaLista.appendChild(novoElemento)
 }
 document.getElementById("listas").appendChild(novaLista);
}

criarListaDeNomes(nomes)


const pets = [ 
    "Ollie", 
    "Pingo",
    "Ted", 
    "Rex"
]

criarListaDeNomes(pets)

const frutas = [
    "Abacate",
    "Ameixa",
    "Jaca"
]

// criarListaDeNomes(frutas)

const botao = document.getElementById('botao')
botao.addEventListener('click', () => {
    criarListaDeNomes(frutas);
})