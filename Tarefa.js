class Tarefa {
    constructor(nome) {
        this.nome = nome
        this.concluida = false
    }
    concluir() {
        this.concluida = true
    }
    mostrar() {
        if (this.concluida) {
            return `[X] ${this.nome}`
        }
        return `[ ] ${this.nome}`
    }
}
module.exports = Tarefa