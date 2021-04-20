let combinacao =[]
function* combinacoes(n, p) {
    if (p < 1) {
        yield [];
    } else {
        for (let i = p; i <= n; i++) {
            for (let calda of combinacoes(i - 1, p - 1)) {
                calda.push(i);
                yield calda;
            }
        }
    }
}
for (let y = 2; y < 6; y++) {
    for (let combination of combinacoes(50, y)) {
       combinacao.push(combination);
    }    
}
let comb2 = []
let comb3 = []
let comb4 = []
let comb5 = []
combinacao.forEach(comb => {
    switch (comb.length) {
        case 2:
            comb2.push(comb)
            break;
        case 3:
            comb3.push(comb)
            break;
        case 3:
            comb3.push(comb)
            break;
        case 4:
            comb4.push(comb)
            break;
        case 5:
            comb5.push(comb)
            break;
        default:
            break;
    }
});
console.log(`comb2`, comb2.length)
console.log(`comb3`, comb3.length)
console.log(`comb4`, comb4.length)
console.log(`comb5`, comb5.length)

console.log(`comb2.contain([1,2])`, comb2.some( x => [1,2].indexOf(x) >= 0))
function menorSequencia(comb) {
    let menor = []
    let maiorTamanho = 0;
    
    comb5.forEach(c5 => {
        tamanho = 0;
        comb.forEach(combinacao => {
            if (comb2.some(x => [1, 2].indexOf(x) >= 0)) {
                tamanho++;
            }
            if (tamanho > maiorTamanho) {
                maiorTamanho = tamanho;
            }
        })
    });
}