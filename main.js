console.log("HI BINDU");

let answer = 0;

//  add

function add(a, b) {
  let result = a + b;

  return result;
}

answer = add(2, 4);
console.log(answer);

// multiply

function multiply(a, b) {
  let result = a * b;
  return result;
}
answer = multiply(6, 4);
console.log(answer);

answer = multiply(4, 6);
console.log(answer);

// Power/Exponentiation

function Power(x, n) {
  let result = x ** n;
  return result;
}
answer = Power(2, 8);
console.log(answer);

answer = Power(3, 4);
console.log(answer);

//Factorial

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
answer = factorialize(5);
console.log(answer);

answer = factorialize(4);
console.log(answer);

// Fibonacci

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));
