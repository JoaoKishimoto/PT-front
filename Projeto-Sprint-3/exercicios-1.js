import { q5 } from './exercicios-0.js'

// Questão 11
function q11 (ano) {
    if (ano % 400 == 0) {
        console.log('O ano é bissexto');
        return true;
    } else if (ano % 100 == 0) {
        console.log('O ano não é bissexto');
        return false;
    } else if (ano % 4 == 0) {
        console.log('O ano é bissexto');
        return true;
    } else {
        console.log('o Ano não é bissexto');
        return false;
    }
}

// teste Q11
console.log('Questão 11:');
// esperado: 'O ano é bissexto'
q11(40);
// esperado: 'O ano é bissexto'
q11(400);
// esperado: 'O ano não é bissexto'
q11(100);


// Questão 12
function q12 (n) {
    let fatorial = 1;
    let i = n;
    while (i > 0) {
        fatorial *= i--;
    }
    return fatorial;
}

// teste Q12
console.log('\nQuestão 12:');
// esperado: 6
console.log(q12(3));
// esperado: 120
console.log(q12(5));

// Questão 13
function q13 (dia) {
    switch (dia) {
        case (1):
            console.log('Dia inválido');
            break;
        case (2):
            console.log('Dia útil');
            break;
        case (3):
            console.log('Dia útil');
            break;
        case (4):
            console.log('Dia útil');
            break;
        case (5):
            console.log('Dia útil');
            break;
        case (6):
            console.log('Dia útil');
            break;
        case (7):
            console.log('Dia inválido');
            break;
    }
}

// teste Q13
console.log('\nQuestão 13:');
// esperado: 'Dia útil'
q13(3);
// esperado: 'Dia inválido'
q13(1);

// Questão 14
function q14 (fruta) {
    switch(fruta) {
        case ('maçã'):
            console.log('Não vendemos essa fruta aqui');
            break;
        case ('kiwi'):
            console.log('Estamos com escassez de kiwis');
            break;
        case ('melancia'):
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('Error 404: Fruit Not Found');
            break;
        // Eu se divirto
    }
}

// teste Q14
console.log('\nQuestão 14:');
// esperado: 'Não vendemos essa fruta aqui' (banquinha do médico)
q14('maçã');
// esperado: 'Estamos com escassez de kiwis'
q14('kiwi');
// esperado: 'Aqui está, são 3 reais o quilo'
q14('melancia');
// esperado: 'Error 404: Fruit Not Found'
q14('banana');

// Questão 15
function q15 (modelo) {
    switch (modelo) {
        case ('hatch'):
            console.log('Compra efetuada com sucesso');
            break;
        case ('sedan' || 'motocicleta' || 'caminhonetes'):
            console.log('Tem certeza que não prefere esse modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
            break;
    }
}

// teste Q15
console.log('\nQuestão 15:');
// esperado: 'Compra efetuada com sucesso"
q15('hatch');
// esperado: 'Tem certeza que não prefere esse modelo?'
q15('sedan');
// esperado: 'Não trabalhamos com este tipo de automóvel aqui'
q15('avião');

// Questão 16
function q16 (a, operando, b) {
    switch (operando) {
        case ('+'):
            return a + b;
        case ('-'):
            return a - b;
        case ('*'):
            return a * b;
        case ('/'):
            return a / b;
        default:
            return('Operador inválido');
            break;
    }
}

// teste Q16
console.log('\nQuestão 16:');
// esperado: 15
console.log(q16(10, '+', 5));
// esperado: 5
console.log(q16(10, '-', 5));
// esperado: 50
console.log(q16(10, '*', 5));
// esperado: 2
console.log(q16(10, '/', 5));
// esperado: 'Operador inválido'
console.log(q16(10, 'x', 5));

// Questão 17
function q17 (plano, salario) {
    switch (plano) {
        case ('A'):
            return q5(salario * (1 + 0.10));
        case ('B'):
            return q5(salario * (1 + 0.15));
        case ('C'):
            return q5(salario * (1 + 0.20));
        default:
            return 'Plano inválido';
    }
}

// teste Q17
console.log('\nQuestão 17:');
// esperado: R$1200,00
console.log(q17('C', 1000));
// esperado: 'Plano inválido'
console.log(q17('Ah', 1));

// Questão 18
function q18 (n) {
    switch (n) {
        case (0):
            console.log('Zero');
            break;
        case (1):
            console.log('Um');
            break;
        case (2):
            console.log('Dois');
            break;
        case (3):
            console.log('Três');
            break;
        case (4):
            console.log('Quatro');
            break;
        case (5):
            console.log('Cinco');
            break;
        case (6):
            console.log('Seis');
            break;
        case (7):
            console.log('Sete');
            break;
        case (8):
            console.log('Oito');
            break;
        case (9):
            console.log('Nove');
            break;
        case (10):
            console.log('Dez');
            break;
        default:
            console.log('Número fora do intervalo.');
    }
}

// Teste Q18
console.log('\nQuestão 18');
// esperado 'Número fora do intervalo'
q18(11);
// esperado 'Quatro'
q18(4);

// Questão 19
function q19 (codigo, quant) {
    switch (codigo) {
        case (100):
            return q5(quant * 3);
        case (200):
            return q5(quant * 4);
        case (300):
            return q5(quant * 5.5);
        case (400):
            return q5(quant * 7.5);
        case (500):
            return q5(quant * 3.5);
        case (600):
            return q5(quant * 2.8);
        default:
            return 'Codigo inválido';
    }
}

// teste Q19
console.log('\nQuestão 19:');
// esperado: 'R$22,00'
console.log(q19(300, 4));
// esperado: 'Código inválido'
console.log(q19(3000, 4));

// Questão 20
function q20 (valor) {
    let notas100;
    let notas50;
    let notas10;
    let notas5;
    let notas1;

    if (valor / 100 >= 1) {
        notas100 = Math.trunc(valor / 100);
        console.log(`${notas100} nota(s) de R$100. `)
        valor %= 100;
    }
    if (valor / 50 >= 1) {
        notas50 = Math.trunc(valor / 50);
        console.log(`${notas50} nota(s) de R$50. `)
        valor %= 50;
    }
    if (valor / 10 >= 1) {
        notas10 = Math.trunc(valor / 10);
        console.log(`${notas10} nota(s) de R$10. `)
        valor %= 10;
    }
    if (valor / 5 >= 1) {
        notas5 = Math.trunc(valor / 5);
        console.log(`${notas5} nota(s) de R$5. `)
        valor %= 5;
    }
    if (valor != 0) {
        notas1 = valor;
        console.log(`${notas1} nota(s) de R$1. `)
    }
}

// teste Q20
console.log('\nQuestão 20:');
/* esperado:    '1 nota(s) de R$50'
                '1 nota(s) de R$10'
                '1 nota(s) de R$5'
                '4 nota(s) de R$1' */
q20(69);