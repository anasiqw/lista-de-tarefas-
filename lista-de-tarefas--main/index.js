const prompt = require("prompt-sync")();

const GerenciadorTarefas = require("./src/GerenciadorTarefas");

const gerenciador = new GerenciadorTarefas();

let opcao;

do {
    console.log(`
==============================
       LISTA DE TAREFAS
==============================
1 - Adicionar tarefa
2 - Listar tarefas
3 - Concluir tarefa
4 - Remover tarefa
0 - Sair
==============================
`);

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":
            const descricao = prompt("Digite a descrição: ");

            if (descricao.trim() === "") {
                console.log("\nA descrição não pode ficar vazia.");
                break;
            }

            const prioridade = prompt(
                "Digite a prioridade (Baixa/Média/Alta): "
            );

            gerenciador.adicionarTarefa(
                descricao,
                prioridade
            );

            break;

        case "2":
            gerenciador.listarTarefas();
            break;

        case "3":
            const idConcluir = Number(
                prompt("Digite o ID da tarefa: ")
            );

            gerenciador.concluirTarefa(idConcluir);
            break;

        case "4":
            const idRemover = Number(
                prompt("Digite o ID da tarefa: ")
            );

            gerenciador.removerTarefa(idRemover);
            break;

        case "0":
            console.log("\nPrograma encerrado.");
            break;

        default:
            console.log("\nOpção inválida!");
    }

} while (opcao !== "0");
