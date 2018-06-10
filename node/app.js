import express from 'express';
import morgan from 'morgan';
import path from 'path';

const PORT = process.env.PORT || 3000;

let app = express();

app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'web/index.html'));
});

app.listen(PORT);
