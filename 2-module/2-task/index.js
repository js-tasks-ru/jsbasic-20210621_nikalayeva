function isEmpty(obj) {
  let keySum = 0;
  for (let key in obj) {
    keySum = keySum + 1;
  }
  return (!Boolean(keySum));
}
