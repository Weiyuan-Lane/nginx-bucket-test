'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/bucket/rollout-1', function(_, res) {
  res.render('pages/index', {
    configuration: 'Bucket',
    rollout: '1',
  });
});

app.get('/bucket/rollout-2', function(_, res) {
  res.render('pages/index', {
    configuration: 'Bucket',
    rollout: '2',
  });
});

app.get('/assigned', function(_, res) {
  res.render('pages/index', {
    configuration: 'Assigned',
    rollout: null,
  });
});

app.listen(port);
console.log(`Listening on port ${port}`);
