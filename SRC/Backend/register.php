<?php
include('conexao.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $mysqli->real_escape_string($_POST['email']);
    $senha = $mysqli->real_escape_string($_POST['senha']);

    // Insere os dados na tabela usuarios
    $sql = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";

    if ($mysqli->query($sql) === TRUE) {
        // Redireciona para a página index.php
        header("Location: http://localhost/khipo/index.php");
        exit(); // Garante que o script seja interrompido após o redirecionamento
    } else {
        echo "Erro ao registrar: " . $mysqli->error;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Khipo Register</title>
    <link rel="stylesheet" href="register.css"> <!-- Se tiver um CSS -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <div id="center">
        <h1>Cadastrar-se</h1>
        <form method="POST" action="">
            <!-- Caixa de entrada para email -->
            <div class="input-box">
                <input type="email" name="email" required placeholder="Email">
                <i class='bx bx-user'></i>
            </div>

            <!-- Caixa de entrada para senha -->
            <div class="input-box">
                <input type="password" name="senha" maxlength="16" required placeholder="Senha">
                <i class='bx bxs-lock-alt'></i>
            </div>

            <button type="submit">Concluir</button>

            <p>Já tem uma conta? <a href="index.php"><strong>Entrar</strong></a></p>
        </form>
    </div>
</body>

</html>
