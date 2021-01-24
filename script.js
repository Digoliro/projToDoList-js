var txtTar = document.getElementById('txtTarefa')
var list = document.getElementById('list')
var todasTarefas = []

function adicionarTarefa() {
    let tarefa = txtTar.value
    let novaTarefa = document.createElement('li')
    let novoParagrafo = document.createElement('p')
    let botaoAlterar = criarBotao('alterar', tarefa)
    let botaoExcluir = criarBotao('excluir', tarefa)


    todasTarefas.push(tarefa)
    novoParagrafo.innerText = tarefa
    novaTarefa.appendChild(novoParagrafo)
    novaTarefa.appendChild(botaoAlterar)
    novaTarefa.appendChild(botaoExcluir)

    list.appendChild(novaTarefa)

    txtTar.value = ""
    txtTar.focus

    alert('Tarefa Adicionada à Lista!')
}

function alterarTarefa(tarefaAntiga) {
    let pos = todasTarefas.indexOf(tarefaAntiga)
    let tarefaNova = prompt('Qual o nome de sua nova tarefa?', tarefaAntiga)
    let tarefaLista = list.getElementsByTagName('li')[pos]
    let btnAlterar = tarefaLista.getElementsByTagName('input')[0]
    let btnExcluir = tarefaLista.getElementsByTagName('input')[1]

    todasTarefas[pos] = tarefaNova
    tarefaLista.getElementsByTagName('p')[0].innerText = tarefaNova
    btnAlterar.setAttribute('onclick', `alterarTarefa('${tarefaNova}')`)
    btnExcluir.setAttribute('onclick', `excluirTarefa('${tarefaNova}')`)
    btnAlterar.setAttribute('id', `editar_${tarefaNova}`)
    btnExcluir.setAttribute('id', `excluir_${tarefaNova}`)


    alert('Tarefa Alterada com Sucesso!')
}

function excluirTarefa(tarefa) {
    var op = window.confirm('Você deseja realmente excluir esta tarefa?')
    if (op) {
        let pos = todasTarefas.indexOf(tarefa)
        let filho = list.children[pos]
        list.removeChild(filho)
        todasTarefas.splice(pos, 1)
    } else {
        alert('Exclusão cancelada!')
    }
}

function criarBotao(funcao, tarefa) {
    let novoBotao = document.createElement('input')
    novoBotao.setAttribute('type', 'button')
    switch (funcao) {
        case 'alterar':
            novoBotao.setAttribute('id', `editar_${tarefa}`)
            novoBotao.setAttribute('value', 'Editar')
            novoBotao.setAttribute('onclick', `alterarTarefa('${tarefa}')`)
            break
        case 'excluir':
            novoBotao.setAttribute('id', `excluir_${tarefa}`)
            novoBotao.setAttribute('value', 'Excluir')
            novoBotao.setAttribute('onclick', `excluirTarefa('${tarefa}')`)
            break
    }
    return novoBotao
}