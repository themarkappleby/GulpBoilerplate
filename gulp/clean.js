var paths = require('./paths.js');
var gulp = require('gulp');
var del = require('del');
var cleaned = false;

gulp.task('clean', function(cb){

  if(!cleaned){
    del(paths.dest, cb);
    cleaned = true;
  }
  else{
    return cb();
  }

});