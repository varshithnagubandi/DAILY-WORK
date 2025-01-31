const express = require("express");
const app = express();
const port = 5500;

const Homehandler = (request, response, next) => {
  if (10 < 20) {
    next();
  }
};

const SencondHandler = (request, response, next) => {
  if (100 > 200) {
    next();
  }
};

app.get("/home", Homehandler, (request, response) => {
  response.send("This is Home Page");
});

app.get("/about", SencondHandler, (request, response) => {
  response.send("This is About Page");
});

app.get("/user/:1699", (request, response) => {
  response.send("This is User 1699 Page");
});

app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON SERVER ${port}`);
});
