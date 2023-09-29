const welcome = document.getElementById("welcome");
const hello = "hello world"
const ola = "Bem-vindo"
welcome.innerHTML = hello;
setTimeout(()=>{
    welcome.innerHTML = ola;

},2000)
setInterval(()=>{
    if(welcome.innerHTML===ola){
    welcome.innerHTML=hello
    }
    else{
        welcome.innerHTML=ola
    }

},2000)
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

//aula do dia 29/09/23

const coresHtml = document.getElementById('cores')
const display = document.getElementById('display')
const display2 = document.getElementById('display2')
const listaDeCores = [
    {
        nome: "laranja",
        hex: "#FBCEB1"
    }, 
    {
        nome: "vermelho",
        hex: "#ff0000"
    },  {
        nome: "roxo",
        hex: "#5d3fd3"
    },  {
        nome: "verde",
        hex: "#afe1af"
    },  {
        nome: "azul",
        hex: "#87ceeb"
    },  {
        nome: "marrom",
        hex: "#7b3f00"
    }, 
]

for(let i = 0; i < listaDeCores.length; i++) {
    const input = document.createElement('input')
    const label = document.createElement('label')
    const br = document.createElement('br')
    input.setAttribute('type', "radio")
    input.setAttribute("name", listaDeCores[i].nome)
    input.addEventListener('change', (evento) => {
        for(let j = 0; j < coresHtml.children.length; j++) { 
            const nome = input.getAttribute('name')
            const cor = coresHtml.children[j].getAttribute('name')
            if(nome !== cor){
                coresHtml.children[j].checked = false
                display.style.backgroundColor = listaDeCores[i].hex
                
            }
           // if()
        }

    } )
    label.innerText = listaDeCores[i].nome
    coresHtml.appendChild(input)
    coresHtml.appendChild(label)
    coresHtml.appendChild(br)
}
   setInterval(()=> {
       const indice = Math.floor(Math.random()*listaDeCores.length -1)
       display2.style.backgroundColor = listaDeCores[indice].hex
   },1000)



