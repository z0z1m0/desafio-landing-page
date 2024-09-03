// script.js

document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Aqui você deve fazer uma requisição POST para a planilha do Google
    // usando a chave de API e enviar os dados (nome, email) para a planilha.

    // Exemplo de como você pode enviar os dados para a planilha:
    const spreadsheetId = 'ID_DA_PLANILHA'; // Substitua pelo ID da sua planilha
    const range = 'A1:B1'; // Substitua pela célula onde deseja inserir os dados

    // Use a biblioteca fetch ou Axios para fazer a requisição POST
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=RAW`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer SUA_CHAVE_DE_API',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            values: [[nome, email]]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        // Aqui você pode redirecionar o usuário para uma página de confirmação, por exemplo
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
});
