function namify(users) {
  let newArray = [];
  for (let i = 0; i < users.length; i++) {
    newArray.push(users[i].name);
  }
  return newArray;
}
