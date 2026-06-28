import { q5 } from './exercicios-0.js'

// Questão 21
function q21 (idade) {
    let base = 100;
    if (idade < 10) {
        return base + 80;
    } else if (idade <= 30) {
        return base ;
    } else if (idade < 60) {
        return  base + 95;
    } else {
        return base + 130;
    }
}

// teste Q21
console.log('Questão 21:');
//esperado: 150
console.log(q21(25));
//esperado: 230
console.log(q21(70));

// Questão 22
function q22 (mes, valor) {
    return q5(valor * Math.pow(1.05, mes - 1));
}

// teste Q22
console.log('\nQuestão 22:');
// esperado: R$1276,28
console.log(q22(6, 1000));
// esperado: R$1102,50
console.log(q22(3, 1000));

// Questão 23
function q23 (alunos) {
    let i = 0;
    let codigo = alunos[0].codigo;
    let media;
    while (codigo >= 0) {
        media = (alunos[i].nota1 * 4 + alunos[i].nota2 * 3 + alunos[i].nota3 * 3) / 10;
        
        console.log(
            alunos[i].codigo,
            alunos[i].nota1,
            alunos[i].nota2,
            alunos[i].nota3,
            media,
            media >= 5 ? 'APROVADO' : 'REPROVADO'
        );

        i++;
        codigo = alunos[i].codigo;
    }
}

// teste Q23
console.log('\nQuestão 23:');
/* esperado:    1 5 5 5 5 APROVADO
                3 6 4 5 5.1 APROVADO
                11 1 0 5 1.9 REPROVADO */
q23([{codigo: 1, nota1: 5, nota2: 5, nota3: 5},
    {codigo: 3, nota1: 6, nota2: 4, nota3: 5},
    {codigo: 11, nota1: 1, nota2: 0, nota3: 5},
    {codigo: -1}])

// Questão 24
function q24 () {
    let count = 0
    while (count < 11) {
        console.log('Hello World!');
        count++;
    }
}

// teste Q24
console.log('\nQuestão 24:');
q24();

// Questão 25
function q25 () {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}

// teste Q25
console.log('\nQuestão 25:');
q25();

// Questão 26
function q26 () {
    const pares  = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    return pares;
}

// teste Q26
console.log('\nQuestão 26:');
// esperado [2, 4, 6, 8, 10, ..., 100]
console.log(q26());

// Questão 27
function q27 (altura1, taxa1, altura2, taxa2) {
    // considerando a taxa de crescimento em cm/ano
    const diferenca = altura1 - altura2;
    let tempo;
    if (diferenca != 0) {
        if (diferenca < 0 && taxa1 > taxa2) {
            tempo = 0;
            while (altura1 <= altura2) {
                tempo++;
                altura1 += taxa1;
                altura2 += taxa2;
            }
        } else if (diferenca > 0 && taxa2 > taxa1) {
            tempo = 0;
            while (altura2 <= altura1) {
                tempo++;
                altura1 += taxa1;
                altura2 += taxa2;
            }
        }
    }
    return tempo;
}

// teste Q27
console.log('\nQuestão 27:');
// esperado: 3
console.log(q27(150, 11, 180, 0));
// esperado: 6
console.log(q27(175, 2, 160, 5));

// Questão 28
function q28 (vetor) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Pares: ${pares}`);
    console.log(`Impares: ${impares}`);
}

// teste Q28
console.log('\nQuestão 28:');
/* esperado:    Pares: 5
                Ímpares: 3 */
q28([10, 11, 17, 2, 5, 14, 28, 420]);

// Questão 29
function q29 (vetor) {
    let dentro = 0;
    let fora = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }
    console.log(`Dentro: ${dentro}`);
    console.log(`Fora: ${fora}`);
}

// teste Q29
console.log('\nQuestão 29:');
/* esperado:    Dentro: 4
                Fora: 4 */
q29([10, 11, 17, 2, 5, 14, 28, 420]);

// Questão 30
function q30 (vetor) {
    let maior = vetor[0];
    let menor = vetor[0];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    console.log(`Menor: ${menor}`);
    console.log(`Meior: ${maior}`);
}

// teste Q30
console.log('\nQuestão 30:');
/* esperado:    Menor: 2
                Maior: 420*/
q30([10, 11, 17, 2, 5, 14, 28, 420]);