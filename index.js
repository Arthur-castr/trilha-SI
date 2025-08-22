document.addEventListener('DOMContentLoaded', function() {

    // --- CONTROLE DA ABA LATERAL PRINCIPAL ---
    const linksMaterias = document.querySelectorAll('.materia a');
    const abaLateral = document.getElementById('aba-lateral');
    const botaoFechar = document.getElementById('fechar-aba');
    const tituloMateria = document.getElementById('titulo-materia');

    linksMaterias.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            const nomeMateria = this.textContent;

            // Esconde TODOS os conteúdos de matéria usando a classe padronizada
            document.querySelectorAll('.conteudo-materia').forEach(conteudo => {
                conteudo.classList.remove('active');
            });

            // Mostra o conteúdo da matéria clicada
            const conteudoAlvo = document.querySelector(targetId);
            if (conteudoAlvo) {
                conteudoAlvo.classList.add('active');
            }

            tituloMateria.textContent = nomeMateria;
            abaLateral.classList.add('active');
        });
    });

    if (botaoFechar) {
        botaoFechar.addEventListener('click', function() {
            abaLateral.classList.remove('active');
        });
    }

    // --- CONTROLE DO ACORDEÃO (BIBLIOGRAFIA, VÍDEOS, ETC) ---
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- CONTROLE DAS ABAS DE LINGUAGEM (PYTHON, JAVA, ETC) ---
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique na aba afete o acordeão
            
            const tabContainer = this.closest('.conteudo-materia');
            
            tabContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            tabContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.querySelector(targetId).classList.add('active');
        });
    });
});