function factorial(n) {
  let result;
  for(result = 1; n > 0; --n) {
    result = result * n;
  }
  return result;
}
