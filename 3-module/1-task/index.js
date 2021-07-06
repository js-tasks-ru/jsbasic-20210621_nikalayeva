function namify(users) {
  let newArray = [];
  users.map(item => newArray.push(item.name));
  return newArray;
}
