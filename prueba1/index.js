function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n > 1) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        divisor++;
    }

    return factors;
}

// Ejemplos de uso:
console.log(primeFactors(20));  // Debería imprimir [2, 2, 5]
console.log(primeFactors(330)); // Debería imprimir [2, 3, 5, 11]
