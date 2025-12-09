document.addEventListener('DOMContentLoaded', function () {
    console.log("Bem-vindo ao meu portfólio!");


const projetos = document.querySelectorAll('.projeto');
projetos.forEach(function(projeto) {
    projeto.addEventListener('click', function() {
        alert('Você clicou no projeto!');
     });
});
});