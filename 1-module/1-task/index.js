let result = 1;

function factorial(n) {
  while(n > 1) {
    result = result * n;
    --n;
  }
  return result;
}
