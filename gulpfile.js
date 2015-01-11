/* jshint node: true */

'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var merge = require('gulp-merge');

gulp.task('all', function () {

  var bower = gulp.src(mainBowerFiles());
  var app = gulp.src(['app.js']);

  return merge(bower, app)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['all']);
