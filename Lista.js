class Lista {
    #nome
    #tarefas

    constructor(nome) {
        this.#nome = nome
        this.#tarefas = []
    }

    get nome() {
        return this.#nome
    }

    get tarefas() {
        return this.#tarefas
    }

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa)
    }

    removerTarefa(posicao) {
        this.#tarefas.splice(posicao, 1)
    }

    concluirTarefa(posicao) {
        this.#tarefas[posicao].concluir()
    }

    mostrarTarefas() {
        console.log(`\nLista: ${this.#nome}`)
        this.#tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.mostrar()}`)
        })
    }
}

module.exports = Lista