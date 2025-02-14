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
    }
}
