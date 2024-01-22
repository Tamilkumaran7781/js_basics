function isAuthenticated(username, password) {
    // Example: Check if username is "exampleUser" and password is "password123"
    return username === "exampleUser" && password === "password123";
  }
  
  function Login(username, password) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (isAuthenticated(username, password)) {
          resolve("Your Authentication is Successful");
        } else {
          reject("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  
  const user = "exampleUser";
  const pass = "password123";
  
  Login(user, pass)
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });
  