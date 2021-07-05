function showSalary(users, age) {
  let strAllSalaries = "";
  for (let user of users) {
    ( user["age"] <= age ) ? strAllSalaries += user["name"] + ", " + user["balance"] + "\n" : false;
  }
  return strAllSalaries.slice(0, -1);
}

