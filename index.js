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

const conteudosPorMateria = {
        calculo1: [
        { value: "conjuntos", text: "Conjuntos" },
        { value: "funcoes", text: "Funcoes" },
        { value: "limites", text: "Limites" },
        { value: "continuidade", text: "Continuidade" },
        { value: "derivadas", text: "Derivadas" },
        { value: "aplicacoes_derivadas", text: "Aplicacoes das Derivadas" },
        { value: "integrais", text: "Integrais" },
        { value: "aplicacoes_integrais", text: "Aplicacoes das Integrais" }
    ],
        estrutura_dados: [
        { value: "tipos_dados", text: "Tipos de Dados" },
        { value: "arrays", text: "Arrays" },
        { value: "ponteiros", text: "Ponteiros" },
        { value: "structs", text: "Structs" },
        { value: "listas_encadeadas", text: "Listas Encadeadas" },
        { value: "pilhas", text: "Pilhas" },
        { value: "filas", text: "Filas" },
        { value: "arvores", text: "Arvores" }
    ],
        programacao_c: [
            { value: "introducao", text: "Introducao" },
            { value: "compilacao", text: "Compilacao" },
            { value: "variaveis", text: "Variaveis" },
            { value: "operadores", text: "Operadores" },
            { value: "condicionais", text: "Condicionais" },
            { value: "lacos", text: "Lacos" },
            { value: "funcoes", text: "Funcoes" },
            { value: "ponteiros", text: "Ponteiros" },
            { value: "alocacao_dinamica", text: "Alocacao Dinamica" },
            { value: "arquivos", text: "Arquivos" }
    ],
        programacao_python: [
            { value: "introducao", text: "Introducao" },
            { value: "variaveis", text: "Variaveis" },
            { value: "tipos_dados", text: "Tipos de Dados" },
            { value: "condicionais", text: "Condicionais" },
            { value: "lacos", text: "Lacos" },
            { value: "funcoes", text: "Funcoes" },
            { value: "listas", text: "Listas" },
            { value: "dicionarios", text: "Dicionarios" },
            { value: "modulos", text: "Modulos" }
    ],
        banco_de_dados: [
            { value: "conceitos_basicos", text: "Conceitos Basicos" },
            { value: "modelo_entidade_relacionamento", text: "Modelo Entidade Relacionamento" },
            { value: "modelo_relacional", text: "Modelo Relacional" },
            { value: "sql_basico", text: "SQL Basico" },
            { value: "sql_consultas", text: "Consultas SQL" },
            { value: "sql_joins", text: "SQL Joins" },
            { value: "normalizacao", text: "Normalizacao" },
            { value: "transacoes", text: "Transacoes" }
    ],
        sistemas_operacionais: [
            { value: "introducao", text: "Introducao" },
            { value: "processos", text: "Processos" },
            { value: "threads", text: "Threads" },
            { value: "escalonamento", text: "Escalonamento" },
            { value: "memoria", text: "Memoria" },
            { value: "memoria_virtual", text: "Memoria Virtual" },
            { value: "sistemas_arquivs", text: "Sistemas de Arquivos" }
    ],
        redes_computadores: [
            { value: "introducao", text: "Introducao" },
            { value: "modelos_rede", text: "Modelos de Rede" },
            { value: "camada_fisica", text: "Camada Fisica" },
            { value: "camada_enlace", text: "Camada de Enlace" },
            { value: "camada_rede", text: "Camada de Rede" },
            { value: "camada_transporte", text: "Camada de Transporte" },
            { value: "camada_aplicacao", text: "Camada de Aplicacao" }
    ],
        engenharia_software: [
            { value: "introducao", text: "Introducao" },
            { value: "levantamento_requisitos", text: "Levantamento de Requisitos" },
            { value: "modelagem_uml", text: "Modelagem UML" },
            { value: "arquitetura_software", text: "Arquitetura de Software" },
            { value: "padroes_projeto", text: "Padroes de Projeto" },
            { value: "testes_software", text: "Testes de Software" },
            { value: "manutencao", text: "Manutencao" }
    ]
    };

    const materiaSelect = document.getElementById("materia");
    const conteudoSelect = document.getElementById("conteudo");
    const resultadoDiv = document.getElementById("resultado-container");

    materiaSelect.addEventListener("change", () => {
        const materia = materiaSelect.value;

        conteudoSelect.innerHTML = "";
        conteudoSelect.disabled = false;

        const opcaoPadrao = document.createElement("option");
        opcaoPadrao.value = "";
        opcaoPadrao.disabled = true;
        opcaoPadrao.selected = true;
        opcaoPadrao.textContent = "Escolha o conteúdo...";
        conteudoSelect.appendChild(opcaoPadrao);

        conteudosPorMateria[materia].forEach(conteudo => {
            const option = document.createElement("option");
            option.value = conteudo.value;
            option.textContent = conteudo.text;
            conteudoSelect.appendChild(option);
        });
    });

    async function buscarTrilha() {
        const materia = materiaSelect.value;
        const conteudo = conteudoSelect.value;

        resultadoDiv.innerHTML = "";

        if (!materia || !conteudo) {
            resultadoDiv.innerHTML = `<div class="erro">Selecione a matéria e o conteúdo.</div>`;
            return;
        }

        try {
            const response = await fetch("https://api-trilha-nk13.onrender.com/trilha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    materia: materia,
                    conteudo: conteudo
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Erro na API");
            }

            const data = await response.json();
            renderizarLista(data.trilha);

        } catch (error) {
            resultadoDiv.innerHTML = `<div class="erro">Erro: ${error.message}</div>`;
        }
    }

    function renderizarLista(trilha) {
        if (!trilha || trilha.length === 0) {
            resultadoDiv.innerHTML = "<p>Você já pode estudar este conteúdo diretamente!</p>";
            return;
        }

        let html = "<h3>Trilha sugerida:</h3><ul>";

        trilha.forEach(item => {
            html += `<li>${item}</li>`;
        });

        html += "</ul>";
        resultadoDiv.innerHTML = html;
    }