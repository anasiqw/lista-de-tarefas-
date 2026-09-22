const Tarefa = require("./Tarefa");

class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
        this.proximoId = 1;
    }

    adicionarTarefa(descricao, prioridade) {
        const tarefa = new Tarefa(
            this.proximoId,
            descricao,
            prioridade
        );

        this.tarefas.push(tarefa);
        this.proximoId++;

        console.log("\nTarefa adicionada com sucesso!");
    }

    listarTarefas() {
        console.log("\n===== LISTA DE TAREFAS =====");

        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa cadastrada.");
            return;
        }

        this.tarefas.forEach(tarefa => {
            tarefa.exibir();
        });
    }

    concluirTarefa(id) {
        const tarefa = this.tarefas.find(
            tarefa => tarefa.id === id
        );

        if (!tarefa) {
            console.log("\nTarefa não encontrada.");
            return;
        }

        tarefa.concluir();

        console.log("\nTarefa concluída com sucesso!");
    }

    removerTarefa(id) {
        const indice = this.tarefas.findIndex(
            tarefa => tarefa.id === id
        );

        if (indice === -1) {
            console.log("\nTarefa não encontrada.");
            return;
        }

        this.tarefas.splice(indice, 1);

        console.log("\nTarefa removida com sucesso!");
    }
}

module.exports = GerenciadorTarefas;
