// achei que era pra fazer um formulário completo, e preencher os campos
// quando ví o vídeo resolução percebi que era só adicionar ao body, mas como
// o que eu fiz é relativamente mais complexo eu deixei dessa forma mesmo
// :D

Inputmask({"mask": "99.999-999"}).mask("#cep");

const cep = document.querySelector("#cep");
document.addEventListener("submit", e => e.preventDefault());
cep.addEventListener("input", e => {
    let cepValue = cep.value.replace('-', '').replace('.', '');
    fetch(`https://viacep.com.br/ws/${cepValue}/json`)
    .then(response => response.json())
    .then(dados => {
        const items = document.querySelectorAll('.form-item');
        console.log(items);
        items.forEach(item => {
            const name = item.lastElementChild.name;
            console.log(name, dados[name]);
            item.lastElementChild.value = dados[name];
        });
    })
})


