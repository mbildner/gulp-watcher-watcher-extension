/* jshint node: true */

'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var merge = require('gulp-merge');
var rimraf = require('rimraf');

gulp.task('all', function () {
  rimraf.sync('dist');

  var bower = gulp.src(mainBowerFiles());
  var app = gulp.src(['bg.js']);

  // return merge(bower, app)
  return merge(app)
    .pipe(concat('all-background.js'))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['all']);
