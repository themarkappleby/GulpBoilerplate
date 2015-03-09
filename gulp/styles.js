/*
 * Process application styles.
 */
 
var paths = require('./paths.js');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');

gulp.task('styles', ['clean'], function(){
  console.log(process.cwd());
  return gulp.src(paths.styles.src)

    .pipe(sourcemaps.init())

    .pipe(stylus({
      cache: false,
      compress: true
    }).on('error', notify.onError({
      title: 'Stylus Error',
      message: "\n<%= error.message %>"
    })))

    .pipe(autoprefixer())

    .pipe(sourcemaps.write('.'))

    .pipe(rev())

    .pipe(gulp.dest(paths.styles.dest))

    .pipe(rev.manifest('dist/manifest.json', {
      merge: true
    }))

    .pipe(gulp.dest(''));

});
