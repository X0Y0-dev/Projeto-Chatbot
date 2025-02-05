<?php
// Incluir o arquivo protect.php para proteção de página
include('protect.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Valor de Mercado</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="home.css">
    <script src="home.js"></script>
</head>

<body>
    <a href="http://localhost/khipo/logout.php" id="logout-button">Sign Out</a>
    <div id="center">
        <h1><a href="https://www.khipo.ai/" target="_blank">
                <img src="https://cdn.prod.website-files.com/64d26c089239a51bd7dbfb9f/64f0d3355afa509ce8d168a6_Link%20-%20home.svg"
                    alt="">
            </a></h1>
        <form id="form">
            <label for="horas">Horas Contratadas:</label>
            <input type="number" id="horas" required placeholder="Horas" />

            <label for="valorConsultor">Valor por Hora do Consultor</label>
            <input type="number" id="valorConsultor" required placeholder="R$" />

            <label for="valorCliente">Valor por Hora Cobrado ao Cliente</label>
            <input type="number" id="valorCliente" required placeholder="R$" />

            <!-- Novos Inputs -->
            <label for="estagiario">Quantidade de Estagiários:</label>
            <input type="number" id="estagiario" required placeholder="Quantidade" />

            <label for="junior">Quantidade de Funcionários Júnior:</label>
            <input type="number" id="junior" required placeholder="Quantidade" />

            <label for="pleno">Quantidade de Funcionários Pleno:</label>
            <input type="number" id="pleno" required placeholder="Quantidade" />

            <label for="senior">Quantidade de Funcionários Sênior:</label>
            <input type="number" id="senior" required placeholder="Quantidade" />

            <button type="button" onclick="calcularValorMercado()">Calcular</button>
        </form>

        <div id="resultado">
            <p><strong>Faturamento Total do Cliente:</strong> R$ <span id="faturamento"></span></p>
            <p><strong>Custo Total com o Consultor:</strong> R$ <span id="custo"></span></p>
            <p><strong>Margem de Lucro:</strong> R$ <span id="margem"></span></p>
            <p><strong>Soma Total dos Custos:</strong> R$ <span id="somaTotal"></span></p> <!-- Novo Output -->
        </div>
        <a href="chatbot.php" target="_self"><i class='bx bx-bot' id="chatbot"></i></a>

    </div>

    <script>
        function calcularValorMercado() {
            // Obter valores dos inputs
            const horas = parseFloat(document.getElementById("horas").value) || 0;
            const valorConsultor = parseFloat(document.getElementById("valorConsultor").value) || 0;
            const valorCliente = parseFloat(document.getElementById("valorCliente").value) || 0;

            // Novos Inputs
            const estagiario = parseInt(document.getElementById("estagiario").value) || 0;
            const junior = parseInt(document.getElementById("junior").value) || 0;
            const pleno = parseInt(document.getElementById("pleno").value) || 0;
            const senior = parseInt(document.getElementById("senior").value) || 0;

            // Custo por tipo de funcionário
            const custoEstagiario = 9.55;
            const custoJunior = 27.27;
            const custoPleno = 47.73;
            const custoSenior = 81.82;
