function camelize(str) {
  let arr = str.split("-");
  return arr[0] + arr.filter((item, index) => index > 0).map(item => item[0].toUpperCase() + item.slice(1)).join('');
}
