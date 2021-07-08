function makeFriendsList (friends) {
  let list = document.createElement('ul');
  document.body.append(list);

  friends.forEach(function(friend) {
    item = document.createElement('li');
    list.appendChild(item);
    item.innerHTML = `${friend.firstName}` + ' ' + `${friend.lastName}`;

})
  return list;
}
