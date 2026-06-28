// Questão 31
function q31(vetor) {
    let negativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++;
        }
    }
    console.log(`Negativos: ${negativos}`);
}

// teste Q31
console.log('Questão 31:');
// esperado: 3
q31([-1, -2, -69, 420, 365, 43]);

// Questão 32
function q32(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}

// teste Q32
console.log('\nQuestão 32:');
// esperado: 10
console.log(q32([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// Questão 33
// Não entendi muito bem o enunciado, mas espero ter contemplado, qualquer coisa fale!!
function q33() {
    const vetorInteiro = [1, 2, 3, 4];
    const vetorString = ['a', 'b', 'c', 'd'];
    const vetorDouble = [3.141592, 9.11, 7.11, 1.20];
    console.log(vetorString.concat(vetorInteiro, "I'll sample as", "Do", "Re", "Mi"));
    console.log(vetorInteiro.concat(vetorDouble, vetorString));
}

// teste Q33
console.log('\nQuestão 33:');
q33()

// Questão 34
// todos os caracteres de ambas as strings?
function q34(stringA, stringB) {
    stringA.toUpperCase();
    stringB.toUpperCase();
    if (stringA.length < stringB.length) {
        for (let i = 0; i < stringB.length; i++) {
            if (!stringA.includes(stringB[i])) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < stringA.length; i++) {
            if (!stringB.includes(stringA[i])) {
                return false;
            }
        }
    }
    return true;
}

// teste Q34
console.log('\nQuestão 34:');
// esperado: true
console.log(q34('caso', 'cosa'));
// esperado: false
console.log(q34('cabelo', 'futebol'));

// Questão 35
function q35(vetorPilha, vetorAdiciona) {
    let temp;
    while (vetorAdiciona.length > 0) {
        temp = vetorAdiciona.shift();
        console.log(temp);
        vetorPilha.push(temp);
    }
    console.log(vetorPilha, vetorAdiciona);
}

// teste Q35
console.log('\nQuestão 35:');
// esperado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] []
q35([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

// Questão 36
function q36_1(vetor, n) {
    return vetor.map(i => i * n);
}

function q36_2(vetor, n) {
    return n > 5 ? vetor.map(i => i * n) : vetor;
}

// teste Q36
console.log('\nQuestão 36:');
// esperado: [2, 4, 6, 8, 10]
console.log(q36_1([1, 2, 3, 4, 5], 2));
// esperado: [1, 2, 3, 4, 5]
console.log(q36_2([1, 2, 3, 4, 5], 2));
// esperado: [10, 20, 30, 40, 50]
console.log(q36_2([1, 2, 3, 4, 5], 10));

// Questão 37
// Progressão Aritimética
function q37_1 (n, a1, r) {
    let soma = 0;
    let pa = Array.from({ length: n }, (_, i) => a1 + i * r);
    pa.forEach((x) => soma += x);
    console.log(pa, soma);
}

// Progressão Geométrica
function q37_2 (n, a1, r) {
    let soma = 0;
    let pg = Array.from({ length: n }, (_, i) => a1 * r ** i)
    pg.forEach((x) => soma += x);
    console.log(pg, soma);
}

// teste Q37
console.log('\nQuestão 37:');
// esperado: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 145
q37_1(10, 10, 1);
// esperado: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1023
q37_2(10, 1, 2);

// Questão 38
function q38(inicio = 0, fim = 100) {
    if (fim < inicio) [inicio, fim] = [fim, inicio];
    for (let i = inicio; i <= fim; i += 2) {
        console.log(i % 2 == 0 ? ++i : i);
    }
}

// teste Q38
console.log('\nQuestão 38:');
// esperado: 1 3 5 7 9 11 ... 99
q38();
// esperado: 91 93 95 97 99
q38(90);
console.log();
// esperado 101 103 105 107 109
q38(110);
console.log();
// esperado: 1 3 5 7 9
q38(undefined, 10);

// Questão 39
function q39(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]];
    }
    return [vetorA, vetorB];
}

// teste Q39
console.log('\nQuestão 39:');
// esperado: [[4, 5, 6], [1, 2, 3]]
console.log(q39([1, 2, 3], [4, 5, 6]));

// Questão 40
function q40(vetorNotas) {
    const conceitos = vetorNotas.map(nota => {
        if (nota < 5) return 'D';
        else if (nota < 7) return 'C';
        else if (nota < 9) return 'B';
        else return 'A';
    });
    console.log(conceitos);
}

// teste Q40
console.log('\nQuestão 40:');
// esperado: ['A', 'B', 'C', 'D']
q40([10, 8, 6, 3]);
// esperado: ['A', 'A', 'B', 'B']
q40([9, 9.5, 8.9, 8.2]);