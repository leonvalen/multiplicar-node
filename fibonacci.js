// Cada nuevo término en la secuencia de Fibonacci se genera agregando los dos términos anteriores.
// Al comenzar con 1 y 2, los primeros 10 términos serán:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Al considerar los términos en la secuencia de Fibonacci cuyos valores no superan los cuatro millones,
// encuentre la suma de los términos pares.


function fibo() {
    let a = 0,
        b = 1,
        c = 1;
    sumPares = 0;


    while (c <= 4000000) {
        c = a + b;
        if (c <= 4000000) console.log(c);
        a = b;
        b = c;
        if (c % 2 === 0) {
            sumPares += c;
        }
    }
    console.log(`La suma de los números pares es = ${sumPares}`);
}

fibo();