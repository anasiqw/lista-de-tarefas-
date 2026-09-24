const prompt = require("prompt-sync")()
const Tarefa = require("./Tarefa")
const Lista = require("./Lista")

const lista = new Lista("Minha Lista")
let opcao = 0

while (opcao !== 5) {
    console.log("LISTA DE TAREFAS\n\n1. Adicionar tarefa\n2. Mostrar tarefas\n3. Concluir tarefa\n4. Remover tarefa\n5. Sair")

    opcao = parseInt(prompt("Escolha uma opção: "))

    if (opcao === 1) {
        const nome = prompt("Digite o nome da tarefa: ")
        const tarefa = new Tarefa(nome)
        lista.adicionarTarefa(tarefa)
        console.log("Tarefa adicionada!")
    }

    if (opcao === 2) {
        lista.mostrarTarefas()
    }

    if (opcao === 3) {
        lista.mostrarTarefas()

        const posicao = parseInt(prompt("Qual tarefa deseja concluir? "))
        lista.concluirTarefa(posicao - 1)
        console.log("Tarefa concluída!")
    }

    if (opcao === 4) {
        lista.mostrarTarefas()

        const posicao = parseInt(prompt("Qual tarefa deseja remover? "))
        lista.removerTarefa(posicao - 1)
        console.log("Tarefa removida")
    }
}

console.log("fim")