/*
  jshint node: true
 */
'use strict';

var _ = require('lodash');
var Q = require('q');
var path = require('path');

var app = require('express')();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get('/watcherRunning', function (req, res) {
  console.log('route hit');
  res.json(true);
});

app.listen(8000);
