// =========================
// DATA E HORA
// =========================

const agora = new Date();

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

// Hora formatada
const hora =
`${agora.getHours().toString().padStart(2, "0")}:${agora.getMinutes().toString().padStart(2, "0")}:${agora.getSeconds().toString().padStart(2, "0")}`;

document.getElementById("horaAtual").innerHTML =
`Hora: ${hora}`;

// Data formatada
const data =
`${diasSemana[agora.getDay()]}, ${agora.getDate()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()}`;

document.getElementById("dataAtual").innerHTML =
`Data: ${data}`;


// =========================
// CALCULADORA DE IDADE
// =========================

function calcularIdade() {

    const valor = document.getElementById("dataNascimento").value;

    const nascimento = new Date(valor);
    const hoje = new Date();

    // Idade em anos
    let anos = hoje.getFullYear() - nascimento.getFullYear();

    if (
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() &&
            hoje.getDate() < nascimento.getDate())
    ) {
        anos--;
    }

    // Diferença em milissegundos
    const diferenca = hoje - nascimento;

    // Totais
    const totalMeses =
        (hoje.getFullYear() - nascimento.getFullYear()) * 12 +
        (hoje.getMonth() - nascimento.getMonth());

    const totalDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const totalHoras = Math.floor(diferenca / (1000 * 60 * 60));
    const totalMinutos = Math.floor(diferenca / (1000 * 60));

    // Exibição
    document.getElementById("resultado").innerHTML = `
        <h3>Idade</h3>

        <p><strong>Anos:</strong> ${anos}</p>
        <p><strong>Meses:</strong> ${totalMeses}</p>
        <p><strong>Dias:</strong> ${totalDias}</p>
        <p><strong>Horas:</strong> ${totalHoras}</p>
        <p><strong>Minutos:</strong> ${totalMinutos}</p>
    `;
}