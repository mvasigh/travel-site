const gulp = require('gulp'),
  postCSS = require('gulp-postcss'),
  importCSS = require('postcss-import'),
  simpleVars = require('postcss-simple-vars'),
  nestedCSS = require('postcss-nested'),
  autoprefixer = require('autoprefixer'),
  mixins = require('postcss-mixins');

function swallowError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('styles', () => {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postCSS([importCSS, mixins, simpleVars, nestedCSS, autoprefixer]))
    .on('error', swallowError)
    .pipe(gulp.dest('./app/temp/styles'));
});
