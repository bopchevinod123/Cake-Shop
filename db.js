// let users = [
//     { userId: "user1", password: "password1" },
//     { userId: "user2", password: "password2" }
//   ];

//   module.exports = { users };

// db.js

// Dummy data for initial setup
 var users = [
  { userId: "user1", password: "password1" },
  { userId: "user2", password: "password2" },
];
// module.exports = { users };

// Function to add a new user
export function addUser(userId, password) {
  let newuser = {
    userId: userId, password: password
}
console.log(newuser,"newuser");
console.log("user before push", users);
users.push(newuser);
console.log("user afer push", users);
}

// Function to find a user by userId
export function findUser(userId) {
  return users.find((user) => user.userId === userId);
}

// Function to validate user credentials
export function validateUser(userId, password) {
  const user = findUser(userId);
  if (user && user.password === password) {
    return true;
  }
  return false;
}
export function getUsers() {
  return users;
}

// module.exports = { addUser, findUser, validateUser };
export default  { addUser, findUser, validateUser, getUsers};
