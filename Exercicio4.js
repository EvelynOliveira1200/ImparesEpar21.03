let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i])
    }
}

let paresDecrescente = pares.sort((a, b) => b - a);
let imparesCrescente = impares.sort((a, b) => a - b);

console.log(`Os números pares são : ` + paresDecrescente.join(", "));
console.log(`Os números impares são : ` + imparesCrescente.join(", "));
