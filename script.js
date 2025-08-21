document.addEventListener('DOMContentLoaded', function () {
    // Elementos do menu de acessibilidade com tema de luta
    const botaoRoundAcessibilidade = document.getElementById('botao-acessibilidade');
    const menuGolpesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Alterna visibilidade do menu de acessibilidade
    botaoRoundAcessibilidade.addEventListener('click', function () {
        botaoRoundAcessibilidade.classList.toggle('rotacao-botao'); // animação tipo "gancho"
        menuGolpesAcessibilidade.classList.toggle('apresenta-lista'); // mostra opções como se fosse um combo
    });

    // Botões para ajustar o "peso" da fonte (como se fosse o treino de Ippo)
    const botaoPowerUpFonte = document.getElementById('aumentar-fonte');
    const botaoLightFonte = document.getElementById('diminuir-fonte');

    let fonteAtual = 1;
    const fonteMaxima = 2;
    const fonteMinima = 0.8;

    botaoPowerUpFonte.addEventListener('click', function () {
        if (fonteAtual < fonteMaxima) {
            fonteAtual += 0.1;
            document.body.style.fontSize = `${fonteAtual}rem`;
        }
    });

    botaoLightFonte.addEventListener('click', function () {
        if (fonteAtual > fonteMinima) {
            fonteAtual -= 0.1;
            document.body.style.fontSize = `${fonteAtual}rem`;
        }
    });
});
