const express = require("express");
const app = express();
const port = 8080;

app.use("/api/v1", require("./src/routes"));
app.use("/pages", require("./src/views"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`App is listen on port ${port}`);
});
