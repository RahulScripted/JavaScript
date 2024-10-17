// Write a program to print all prime numbers in the range [N,5 * N].





const n = parseInt(input);
function isPrime(x) {
    if (x <= 1) return false;
    if (x <= 3) return true;
    if (x % 2 === 0 || x % 3 === 0) return false;

    let i = 5;
    while (i * i <= x) {
        if (x % i === 0 || x % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

 function printPrimes(l, r) {
    let result = [];
    for (let i = l; i <= r; i++) {
        if (isPrime(i)) result.push(i);
    }
    console.log(result.join(' '));
}

printPrimes(n, 5 * n);