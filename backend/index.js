const express = require("express");
const app = express();
const port = 8000;

const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update this with your own origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
