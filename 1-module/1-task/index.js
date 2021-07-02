function factorial(n) {
  let result = 1;
  for(; n > 0; --n) {
    result = result * n;
  }
  return result;
}
