<?php
// Incluir o arquivo protect.php para proteção de página
include('protect.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot - SuporteBot</title>
    <link rel="stylesheet" href="chatbot.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>

    <div id="chat-container">
        <div id="chat-header">SuporteBot<i class='bx bx-bot' id="chatbot"></i><span id="close-chat">✖</span></div>
        <div id="chat-messages">
            <!-- Adicionando as opções de perguntas antes da interação -->
            <div id="quick-options">
                <button class="option-button" id="opcao1">Como o aplicativo calcula os orçamentos?</button>
                <button class="option-button" id="opcao2">O que é usado como base para os cálculos?</button>
                <button class="option-button" id="opcao3">O aplicativo calcula impostos automaticamente?</button>
                <button class="option-button" id="opcao4">O aplicativo permite gerar orçamentos para diferentes tipos de serviço?</button>
                <button class="option-button" id="opcao5">Posso editar um orçamento depois de criá-lo?</button>
                    
            </div>
        </div>
        <input type="text" id="chat-input" placeholder="Digite sua mensagem..." />
        <button id="send-message">Enviar</button>
    </div>

    <script src="chatbot.js"></script>
</body>

</html>
