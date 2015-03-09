/*
 * Concat and uglify the scripts.
 */

var paths = require('./paths.js');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var rev = require('gulp-rev');

gulp.task('scripts', ['clean'], function(){
  return gulp.src(paths.scripts.src)

    .pipe(concat({path: 'scripts.js', cwd: ''}))

    .pipe(uglify().on('error', notify.onError({
      title: 'Uglify Error',
      message: "\n<%= error.message %>"
    })))

    .pipe(rev())

    .pipe(gulp.dest(paths.scripts.dest))

    .pipe(rev.manifest('dist/manifest.json', {
      merge: true
    }))

    .pipe(gulp.dest(''));
});

var revReplace = require('gulp-rev-replace');
var collector = require('gulp-rev-collector');

gulp.task('revision', ['clean', 'scripts', 'styles', 'templates'], function(){
  return gulp.src('dist/index.html')
    //.pipe(revReplace({
    //  manifest: 'dist/manifest.json'
    //}))
    .pipe(collector())
    .pipe(gulp.dest('dist'));
});
