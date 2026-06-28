pegaCotacao();

setInterval(pegaCotacao, 30 * 1000)

function formata (number) {
    number = number.toFixed(2).replace('.', ',');
    return `R$${number}`
}

function pegaCotacao () {
    const cotacao = document.querySelector('#cotacao');
    
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(dados => {
        if (!dados.erro) {
            cotacao.innerText = formata(dados.BRL.last);
        } else {
            cotacao.innerText = 'Erro na requisição';
        }
    })
}