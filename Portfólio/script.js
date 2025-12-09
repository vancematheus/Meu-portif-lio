// Exemplo de script simples para interações
document.addEventListener('DOMContentLoaded', function () {
    console.log("Bem-vindo ao meu portfólio!");

    // Exemplo de interação: ao clicar nos projetos, exibir um alerta
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach(function(projeto) {
        projeto.addEventListener('click', function() {
            alert('Você clicou no projeto!');
        });
    });
});
