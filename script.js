
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const finalizacao = document.getElementById("finalizacao");

botaoCalcular.addEventListener("click", function () {

    finalizacao.textContent = "";

    // Remove as classes do resultado anterior
    resultado.className = "resultado";

    try {

        const texto1 = document.getElementById("nota1").value;
        const texto2 = document.getElementById("nota2").value;
        const texto3 = document.getElementById("nota3").value;

        // Verifica se os campos estão vazios
        if (texto1 === "" || texto2 === "" || texto3 === "") {
            throw new Error("Preencha todas as notas.");
        }

        const nota1 = Number(texto1);
        const nota2 = Number(texto2);
        const nota3 = Number(texto3);

        // Verifica se os valores são números válidos
        if (!Number.isFinite(nota1) ||
            !Number.isFinite(nota2) ||
            !Number.isFinite(nota3)) {

            throw new Error("Digite apenas números válidos.");
        }

        // Verifica se as notas estão entre 0 e 10
        if (nota1 < 0 || nota1 > 10 ||
            nota2 < 0 || nota2 > 10 ||
            nota3 < 0 || nota3 > 10) {

            throw new Error("As notas devem estar entre 0 e 10.");
        }

        // Calcula a média
        const media = (nota1 + nota2 + nota3) / 3;

        // Verifica a situação do aluno
        if (media >= 7) {

            resultado.textContent =
                "Média: " + media.toFixed(2) +
                " | Situação: Aprovado!";

            resultado.classList.add("sucesso");

        } else if (media >= 5) {

            resultado.textContent =
                "Média: " + media.toFixed(2) +
                " | Situação: Recuperação!";

            resultado.classList.add("recuperacao");

        } else {

            resultado.textContent =
                "Média: " + media.toFixed(2) +
                " | Situação: Reprovado!";

            resultado.classList.add("reprovado");
        }

    } catch (erro) {

        resultado.textContent = "Erro: " + erro.message;
        resultado.classList.add("erro");

    } finally {

        finalizacao.textContent = "Cálculo finalizado.";

    }

});
