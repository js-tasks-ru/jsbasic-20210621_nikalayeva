function camelize(str) {

  let arr = str.split("-");
  let strCamelCase;
  let arrCamelCase = [arr[0]];


     for(let i = 1; i < arr.length; i++) {
       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
       arrCamelCase.push(arr[i]);
     }

    strCamelCase = arrCamelCase.join('');

  return strCamelCase;
}
