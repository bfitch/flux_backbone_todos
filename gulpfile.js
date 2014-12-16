var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var react = require('gulp-react');
// var traceur = require('gulp-traceur');

gulp.task('default', function () {
  watch('./app/**')
  .pipe(coffee({bare: true}).on('error', gutil.log))
  .pipe(react())
  .pipe(gulp.dest('./build/'))
});
