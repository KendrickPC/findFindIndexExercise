// findUserByUsername
// Write a function called findUserByUsername which accepts an array of objects,
// each with a key of username, and a string. The function should return the
// first object with the key of username that matches the string passed to the
// function. If the object is not found, return undefined.

function findUserByUsername(arr, val, key="username") {
  return arr.find(function(user) {
    return user[key] === val;
  })
}

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')) // undefined

// removeUser
// Write a function called removeUser which accepts an array of objects, each with
// a key of username, and a string. The function should remove the object from the
// array and return this object. If the object is not found, return undefined.

function removeUser(arr, val, key="username") {
  const targetIdx = arr.findIndex(function(user) {
    return user[key] === val;
  })
  if (targetIdx !== -1) {
    return arr.splice(targetIdx, 1)[0];
  } else {
    return undefined;
  }
}

const users2 = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log("\nRemove object from original array:")
console.log(removeUser(users2, 'akagen')) // {username: 'akagen'}
console.log(removeUser(users2, 'akagen')) // undefined