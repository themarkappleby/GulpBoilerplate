var requireDir = require('require-dir');
requireDir('./gulp');

/*
var gulp = require('gulp');

gulp.task('watch', function(){
  gulp.watch(['lib/styles.styl'], ['css']);
  gulp.watch(['lib/scripts.js'], ['js']);
  gulp.watch(['lib/index.jade'], ['html']);
});

gulp.task('build', ['html', 'js', 'css']);
gulp.task('default', ['build', 'server', 'watch']);
*/