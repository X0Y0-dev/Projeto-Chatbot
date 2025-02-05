<?php
if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION['id'])) {
    header("Location: http://localhost/khipo/index.php");
    exit; // Garante que o script pare a execução após o redirecionamento
}
