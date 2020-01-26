'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(_, res) {
  res.render('pages/index');
});

app.listen(port);
console.log(`Listening on port ${port}`);
