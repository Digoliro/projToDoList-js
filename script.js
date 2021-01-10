var txtTar = document.getElementById('txtTarefa')
var list = document.getElementById('list')

function adicionarTarefa() {
    let tarefa = txtTar.value
    let novaTarefa = document.createElement('li')
    novaTarefa.innerText = tarefa
    list.appendChild(novaTarefa)
    alert('Tarefa Adicionada à Lista')
}