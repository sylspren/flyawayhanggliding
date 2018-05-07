import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

let app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send("I'm alive!");
});

app.listen(PORT);
