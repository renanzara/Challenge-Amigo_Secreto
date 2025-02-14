let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let novoAmigo = inputAmigo.value;
    
    if (novoAmigo.trim() == "") {
        alert('Por favor, insira um nome');
        return;
    } else {
        amigos.push(novoAmigo);
        inputAmigo.value = "";
        atualizarLista()
    }
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira um nome antes de sortear');
        return;
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let nomeEscolhido = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo escolhido é : ${nomeEscolhido}`;
    }
}