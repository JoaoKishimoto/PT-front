// Questão 1
function questaoUm (a, b){
    console.log((a + b), (a - b), (a * b), (a / b));
}

// teste Q1
console.log("questão 1:");
// esperado: 7, -3, 10, 0.4
questaoUm(2, 5);

function questaoDois (a, b, c) {
    if(a == b && a == c){
        return 'Equilátero';
    } else if(a == b || a == c) {
        return 'Isóceles';
    } else {
        return 'Escaleno';
    }
}

// teste Q2
console.log("\nQuestão 2:");
// Equilátero esperado
console.log(questaoDois(3, 3, 3));
// Isóceles esperado
console.log(questaoDois(3, 3, 1));
// Escaleno esperado
console.log(questaoDois(1, 2, 3));

// Questão 3
function questaoTres (base, expoente) {
    return Math.pow(base, expoente);
}

// teste questão 3
console.log("\nQuestão 3:");
// 32 esperado
console.log(questaoTres(2, 5));
// 1024 esperado
console.log(questaoTres(2, 10));

// Questão 4
function questaoQuatro (dividendo, divisor) {
    const resto = dividendo % divisor;
    const resultado = (dividendo - resto) / divisor;
    console.log(resultado, resto);
}

// teste Q4
console.log("\nQuestão 4:");
// 4, 1 esperado
questaoQuatro(29, 7);
// 5, 0 esperado
questaoQuatro(25, 5)

// Questão 5
function questaoCinco (preco) {
    let base = 'R$'
    const valor = preco.toFixed(2).toString();
    return base.concat(valor.replace('.', ','));
}

// teste Q5
console.log("\nQuestão 5:");
// esperado 'R$420,69'
console.log(questaoCinco(420.68703));
// esperado 'R$800,85'
console.log(questaoCinco(800.84792));

// Questão 6
function seisSimples (capital, juros, tempo) {
    return questaoCinco(capital * (1 + juros * tempo));
}

function seisComposto (capital, juros, tempo) {
    return questaoCinco(capital * (Math.pow(1 + juros, tempo)));
}

// teste Q6
console.log("\nQuestão 6:");
// esperado 'R$1200,00'
console.log(seisSimples(1000, 0.1, 2));
// esperado 'R$1210,00'
console.log(seisComposto(1000, 0.1, 2));

// Questão 7
function questaoSete (a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        return 'Delta é negativo';
    } else {
        let raizes = []
        const raizDelta = Math.pow(delta, 1/2);
        raizes.push((-b - raizDelta)/2);
        raizes.push((-b + raizDelta)/2);
        return raizes;
    }
}

// teste Q7
console.log('\nQuestão 7:');
// esperado: [1, 1]
console.log(questaoSete(1, -2, 1));
//esperado: [2, 3]
console.log(questaoSete(1, -5, 6));
//esperado: 'Delta é negativo'
console.log(questaoSete(1, 2, 20));

// questão 8
function questaoOito (listaString) {
    const lista = listaString.split(" ");
    let record = Number(lista[0]);
    let recordCount = 0;
    let worst = Number(lista[0]);
    let indexWorst = 0;
    for (let i = 0; i < lista.length; i++) {
        if (Number(lista[i]) > record) {
            record = lista[i];
            recordCount++;
        } else if (Number(lista[i]) < worst) {
            worst = lista[i];
            indexWorst = i;
        }
    }
    return [recordCount, indexWorst + 1]
}

// teste Q8
console.log('\nQuestão 8:');
// esperado: [2, 3]
console.log(questaoOito('7 9 5 12 9'));

// Questão 9
function questaoNove (notas) {
    const resultado = [];
    for (let i = 0; i < notas.length; i ++) {
        if (notas[i] < 38) {
            resultado.push('Reprovado');
        } else if (notas[i] % 5 >= 3) {
            notas[i] += 5 - (notas[i] % 5);  
            resultado.push('Aprovado');
        } else {
            resultado.push('Aprovado');
        }
    }
    return [notas, resultado];
}

// teste Q9
console.log('\n Questão 9:');
// esperado: [[13, 35, 40, 37, 70, 100],
// ['Reprovado', 'Reprovado', 'Aprovado', 'Reprovado', 'Aprovado', 'Aprovado']]
console.log(questaoNove([13, 35, 38, 37, 69, 98]));

// Questão 10
function questaoDez (n) {
    return (n % 3 == 0);
}

// teste  Q10
console.log('\nQuestão 10:');
// esperado: true
console.log(questaoDez(19260));
// esperado: false
console.log(questaoDez(21491));
