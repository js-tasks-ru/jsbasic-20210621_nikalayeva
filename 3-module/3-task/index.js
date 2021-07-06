function camelize(str) {

  let arr = str.split("-");
  let strCamelCase;
  let arrCamelCase = [arr[0]];

  let filteredItems = arr.filter(function(item, index) {
    return index > 0;
  });
  filteredItems.map(item => arrCamelCase.push(item[0].toUpperCase() + item.slice(1)))
  strCamelCase = arrCamelCase.join('');
  return strCamelCase;
}
