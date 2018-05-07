import express from 'express';

const PORT = process.env.PORT || 3000;

let app = express();

app.get('/', function (req, res) {
  res.send("I'm alive!");
});

app.listen(PORT);
