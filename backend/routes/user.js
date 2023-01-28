module.exports = (app) => {
  const users = require("../controllers/user.js");

  // Create a new User
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.getAll);

  // Search
  app.get("/usersbyname/:userName", users.getUsersLike);
  
  // Retrieve all Users
  app.get("/usersbyname/", users.getAll);
  
  // Retrieve a single User with userId
  app.get("/users/:userId", users.get);

  // Update a User with userId
  app.put("/users/:userId", users.update);

  // Delete a User with userId
  app.delete("/users/:userId", users.delete);

  // Delete all Users
  app.delete("/users", users.deleteAll);
  
};