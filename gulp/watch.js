var paths = require('./paths.js');
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function(){
  watch(paths.styles.all, function(){
    gulp.start('styles');
  });
});
