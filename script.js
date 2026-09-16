const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent =
        "🎮 Curiosidade: o primeiro jogo eletrônico considerado um dos primeiros da história foi criado na década de 1950 e se chamava Tennis for Two!";
}

botao.addEventListener("click", mostrarMensagem);
