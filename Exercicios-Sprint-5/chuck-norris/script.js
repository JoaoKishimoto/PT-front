const piada = document.querySelector('#piada');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(dados => {
        piada.innerText = dados.value;
    })
})