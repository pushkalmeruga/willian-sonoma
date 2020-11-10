const path = require('path');
const express = require('express');

const app = express();


app.use(
  express.static(
    path.join(__dirname, 'source'),
    {
      fallthrough: true,
      extensions: ['html', 'htm', 'js']
    }
  ),
  (req, res) => res.sendStatus(404)
);

app.use(require('./server/errorHandler'));

app.listen(4500);

console.log("server has started and listening on port 4500");