class Tarefa {
    constructor(id, descricao, prioridade) {
        this.id = id;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluida = false;
    }

    concluir() {
        this.concluida = true;
    }

    exibir() {
        const status = this.concluida ? "[X]" : "[ ]";

        console.log(
            `${status} ID: ${this.id} | ${this.descricao} | Prioridade: ${this.prioridade}`
        );
    }
}

module.exports = Tarefa;
