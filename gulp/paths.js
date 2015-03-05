module.exports = {
  dest: 'dist/',
  styles: {
    all: 'lib/**/*.styl',
    src: 'lib/styles.styl',
    dest: 'dist/css'
  },
  scripts: {
    src: 'lib/**/*.js',
    dest: 'dist/js'
  },
  templates: {
    src: 'lib/**/*.jade',
    dest: 'dist/'
  },
  vendor: {
    scripts: {
      src: 'bower_components/angular/angular.js',
      dest: 'dist/js'
    }
  }
};
