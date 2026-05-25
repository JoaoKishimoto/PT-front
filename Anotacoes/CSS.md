# CSS - O estilo do site
``` CSS
h1 { // seletor
    font-family: Arial; // declaração
       |           |
       |         Valor
    Propriedade
}
/* Estrutura de comentário */
```
## Propriedades
### Display
- inline: não ocupa a linha toda, podendo compartilhar-la com outros elementos
- block: ocupa todo o espaço horizontal disponível, sendo limitado apenas pela largura do elemento pai

### Background
- color: define a cor de fundo
- image: define a imagem de fundo
- repeat: define a repetição do fundo, se imagem
- position: define a posição, caso imagem
- size: define o tamanho do background
Pode ser definido um a um da seguinte forma: 
``` CSS
body {
    background-image: url(./assets/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
}
```
Ou, na forma reduzida:
``` CSS 
body{
    /* background: color image repeat position/size */
    background: url(./caminho/da/imagem) no-repeat top center/cover
}
```

## Alinhamentos
### Text
``` CSS
p{
    text-align: center;
}
```

### Background
``` CSS
body{
    background: var(--bg-url) no-repeat top center/cover
}
```

### Display Flex
``` CSS
div{
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Display Block
``` CSS
div{
    /* set size and add margin: 0 auto; */
    width: 10px;
    margin: 0 auto;
}
```

### Absolute
``` CSS
/* remember to add position: relative; in the element you want the absolute to be fixed on */
button{
    position: absolute;
    /* aligning in y axis */
    top: 50%;
    transform: translateY(-50%);
}
```