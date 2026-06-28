# javascript - responsividade/interatividade

## Loops
### For in
```javascript
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i in lista) {
    console.log(i);
}
```

## Seleção de elementos
### querySelector
```javascript
// . para selecionar uma classe
// # para selecionar um id
// quando você quer selecionar 2 parâmetros ao mesmo tempo
// utilizar sem espaço os dois seletores como abaixo:
querySelectorAll('.terceiro.ultimo');

// para selecionar tudo utilize *
// para utilizar o not faça como abaixo:
querySelectorAll(':not(#primeiro)');

// para selecionar um child de um certo elemento (por ordem)
// use o segunte:
querySelectorAll(':nth-child(3)');

// e para selecionar o 3º div por exemplo faça o seguinte:
querySelectorAll('div:nth-of-type(2)');

// para selecionar elementos com um atributo faça o segunte:
querySelectorAll('[<nomedoAtributo>]');

// Lembre-se que o querySelectorAll() retorna um nodeList e não um Array
// se necessário transforme com [... <nodeList>] para transformar em Array
```