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


app.listen(8000);
