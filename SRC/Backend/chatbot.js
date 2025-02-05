document.getElementById("close-chat").addEventListener("click", function () {
    window.location.href = "home.php"; // Retorna para a página principal
});

// Variável para controle da leitura de voz
let leituraAtivada = false;

// Pergunta ao usuário se deseja ativar a leitura por voz
function perguntarAtivacaoVoz() {
    let ativar = confirm("Deseja ativar a leitura por voz?");
    leituraAtivada = ativar; // Define se a voz será ativada ou não
}

// Chama a função ao carregar a página
window.onload = perguntarAtivacaoVoz;

// Lista de respostas do chatbot (baseado no código Python)
const respostas = {
    //OPÇÃO 1
    "como o aplicativo calcula os orçamentos?": "Nosso aplicativo utiliza uma fórmula personalizada baseada nos parâmetros definidos pela Khipo, como custo de matéria-prima, tempo de serviço, impostos e margem de lucro. Os usuários inserem os dados necessários, e o sistema gera um orçamento preciso em segundos.",
    //OPÇÃO 2
    "o que é usado como base para os cálculos?": "Foram analisados modelos de precificação em outsourcing de T.I. Empresas de outsourcing geralmente cobram um valor/hora do cliente e pagam um valor/hora para o consultor, garantindo uma margem de lucro sobre a diferença.",
    //OPÇÃO 3
    "o aplicativo calcula impostos automaticamente?": "Sim! Ele pode incluir impostos automaticamente no cálculo, de acordo com as regras configuradas pela Khippo. Caso necessário, os usuários podem ajustar as taxas manualmente.",
    //OPÇÃO 4
    "o aplicativo permite gerar orçamentos para diferentes tipos de serviço?": "Sim! O sistema foi projetado para lidar com vários tipos de serviços oferecidos pela Khippo. Você pode escolher a categoria desejada e o aplicativo adaptará os cálculos conforme necessário.",
    //OPÇÃO 5
    "posso editar um orçamento depois de criá-lo?": "Não, você terá que realizar um novo orçamento.",


    "eae": "Olá! Como posso te ajudar?",
    "salve": "Olá! Como posso te ajudar?",
    "opa": "Olá! Como posso te ajudar?",
    "ola": "Olá! Como posso te ajudar?",
    "olá": "Olá! Como posso te ajudar?",
    "oi": "Oi! Precisa de alguma informação?",
    "suporte": "Deseja falar com um atendente? Digite 'sim' ou 'não'.",
    "sim": "Chamando Ajuda Profissional... Aguarde.",
    "nao": "Ok! Caso precise, estou aqui.",
    "não": "Ok! Caso precise, estou aqui.",
    "duvidas": "Aqui estão algumas dúvidas frequentes: ...",
    "dúvidas": "Aqui estão algumas dúvidas frequentes: ...",
    "duvida": "Aqui estão algumas dúvidas frequentes: ...",
    "dúvida": "Aqui estão algumas dúvidas frequentes: ...",
    "tchau": "Até mais! Se precisar, estarei aqui.",
    "thanos?": "Eu sou o Thanos, o Deus da Morte!",
    "default": "Desculpe, não entendi. Digite 'dúvidas' para ver opções."
};

// Função para enviar mensagens do usuário
document.getElementById("send-message").addEventListener("click", function () {
    enviarMensagem();
});

document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        enviarMensagem();
    }
});

function enviarMensagem() {
    let inputElement = document.getElementById("chat-input");
    let mensagem = inputElement.value.trim().toLowerCase();
    if (mensagem === "") return;

    // Exibir mensagem do usuário
    adicionarMensagem("Você", mensagem);

    // Responder
    let resposta = respostas[mensagem] || respostas["default"];
    setTimeout(() => {
        adicionarMensagem("SuporteBot", resposta);
        if (leituraAtivada) {
            lerTexto(resposta);
        }
    }, 500);

    inputElement.value = "";
}

// Adicionar mensagens ao chat
function adicionarMensagem(remetente, mensagem) {
    let chatMessages = document.getElementById("chat-messages");
    let novaMensagem = document.createElement("div");
    novaMensagem.innerHTML = `<strong>${remetente}:</strong> ${mensagem}`;
    chatMessages.appendChild(novaMensagem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para leitura em voz alta
function lerTexto(texto) {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    synth.speak(utterance);
}

// Lógica para botões de opções rápidas
document.getElementById("opcao1").addEventListener("click", function () {
    responderComOpcao("como o aplicativo calcula os orçamentos?");
});

document.getElementById("opcao2").addEventListener("click", function () {
    responderComOpcao("o que é usado como base para os cálculos?");
});

document.getElementById("opcao3").addEventListener("click", function () {
    responderComOpcao("o aplicativo calcula impostos automaticamente?")
});

document.getElementById("opcao4").addEventListener("click", function () {
    responderComOpcao("o aplicativo permite gerar orçamentos para diferentes tipos de serviço?")
});

document.getElementById("opcao5").addEventListener("click", function () {
    responderComOpcao("posso editar um orçamento depois de criá-lo?")
});


function responderComOpcao(opcao) {
    let resposta = respostas[opcao] || respostas["default"];
    adicionarMensagem("Você", resposta); // Exibe a resposta do bot imediatamente
    if (leituraAtivada) {
        lerTexto(resposta); // Ativa a leitura em voz se configurada
    }
    // Esconde as opções rápidas
    document.getElementById("quick-options").style.display = "none";
}

// Função para enviar a mensagem do usuário
document.getElementById("send-message").addEventListener("click", function () {
    enviarMensagem();
});

document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        enviarMensagem();
    }
});

function enviarMensagem() {
    let inputElement = document.getElementById("chat-input");
    let mensagem = inputElement.value.trim().toLowerCase();
    if (mensagem === "") return;

    // Exibir mensagem do usuário
    adicionarMensagem("Você", mensagem);

    // Responder
    let resposta = respostas[mensagem] || respostas["default"];
    setTimeout(() => {
        adicionarMensagem("SuporteBot", resposta);
        if (leituraAtivada) {
            lerTexto(resposta);
        }
    }, 500);

    inputElement.value = "";
}

// Adicionar mensagens ao chat
function adicionarMensagem(remetente, mensagem) {
    let chatMessages = document.getElementById("chat-messages");
    let novaMensagem = document.createElement("div");
    novaMensagem.innerHTML = `<strong>${remetente}:</strong> ${mensagem}`;
    chatMessages.appendChild(novaMensagem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para leitura em voz alta
function lerTexto(texto) {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    synth.speak(utterance);
}
