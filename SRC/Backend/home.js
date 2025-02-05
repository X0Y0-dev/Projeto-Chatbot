function calcularValorMercado() {
    // Obter os valores inseridos pelo usuário
    const horasContratadas = parseFloat(document.getElementById('horas').value);
    const valorConsultor = parseFloat(document.getElementById('valorConsultor').value);
    const valorCliente = parseFloat(document.getElementById('valorCliente').value);

    // Calcular faturamento total do cliente
    const faturamentoCliente = horasContratadas * valorCliente;

    // Calcular custo total com o consultor
    const custoConsultor = horasContratadas * valorConsultor;

    // Calcular margem de lucro
    const margemLucro = faturamentoCliente - custoConsultor;

    // Exibir os resultados na tela
    document.getElementById('faturamento').textContent = faturamentoCliente.toFixed(2);
    document.getElementById('custo').textContent = custoConsultor.toFixed(2);
    document.getElementById('margem').textContent = margemLucro.toFixed(2);

    // Mostrar a seção de resultados
    document.getElementById('resultado').style.display = 'block';
}
