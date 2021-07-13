function getMinMax(str) {
  let arr = str.split(',').join(' ').split(' ');
  let arrNum = [];
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      arrNum.push(+arr[i]);
    }
  }
  arrNum.sort((a, b) => a - b);
  result.min = arrNum[0];
  result.max = arrNum[arrNum.length - 1];
  return result;
}
