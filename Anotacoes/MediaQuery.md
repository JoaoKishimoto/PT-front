# Media Query
## Setup
```html
<!-- dentro do head do html coloque a linha a seguir -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- geralmente essa linha já está inclusa no atalho !tab -->
```

```css
@media screen and (max-width: 500px) {
    /* max-width indica o maior tamanho que o seguinte aplica */
    /* min-width indica o menor tamanho que o seguinte aplica */
    h1{
        color: green;
    }
}
/*  Além de screen tmabém exitem os modos print (impressão), speach e all */ 
/* exemplos: */
@media print and (min-width: 600px) {}
@media speach and (min-width: 600px) {}
@media (min-width: 600px) {}

@media (orientation: landscape /* or portrait */)

```
Em geral projetos utilizam o min-width, já que são mobile-first
tamanhos gerais:
```css
/* 480 - 768px tablet */
@media (min-width: px) {}
/* 768 - 1024px laptops e telas menores */
@media (min-width: px) {}
/* 1024 - 1200px desktop */
@media (min-width: px) {}
/* telas maiores e TVs */
@media (min-width: 1200px) {}

```