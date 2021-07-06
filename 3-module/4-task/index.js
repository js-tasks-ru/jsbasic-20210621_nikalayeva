function showSalary(users, age) {
  let usersFiltered = users.filter(user => user.age <= age);
  let newArr = usersFiltered.map(user => user.name + ", " + user.balance + "\n");
  return newArr.join("").slice(0, -1);
}

