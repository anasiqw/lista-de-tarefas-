const prompt = require("prompt-sync")()
const Tarefa = require("./Tarefa")
const Lista = require("./Lista")
const lista = new Lista("Minha Lista")
let opcao = 0

while (opcao !== 5) {
    console.log("\nLISTA DE TAREFAS")
    console.log("1. Adicionar")
    console.log("2. Mostrar")
    console.log("3. Concluir")
    console.log("4. Remover")
    console.log("5. Sair")

    opcao = parseInt(prompt("Opção: "))

    if (opcao === 1) {
        const nome = prompt("Nome da tarefa: ")
        const tarefa = new Tarefa(nome)
        lista.adicionarTarefa(tarefa)
        console.log("Tarefa adicionada")
    }
    if (opcao === 2) {
        lista.mostrarTarefas()
    }
    if (opcao === 3) {
        lista.mostrarTarefas()
        const posicao = parseInt(prompt("Número da tarefa: "))
        lista.concluirTarefa(posicao - 1)
        console.log("Tarefa concluída")
    }
    if (opcao === 4) {
        lista.mostrarTarefas()
        const posicao = parseInt(prompt("Número da tarefa: "))
        lista.removerTarefa(posicao - 1)
        console.log("Tarefa removida")
    }
}

console.log("Fim")