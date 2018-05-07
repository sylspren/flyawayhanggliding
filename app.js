import express from 'express';

let app = express();

app.get('/', function (req, res) {
  res.send("I'm alive!");
});

app.listen(3000);
