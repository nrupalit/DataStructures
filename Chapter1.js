// Factorial

Factorial = (n) => {
    if( n == 1 || n == 0){
        return 1;
    } else {
        return n * Factorial( n - 1);
    }
}

console.log(Factorial(6), "Factorial of Number ")