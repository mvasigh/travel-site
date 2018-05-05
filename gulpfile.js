const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postCSS = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  simpleVars = require('postcss-simple-vars'),
  nestedCSS = require('postcss-nested');

gulp.task('default', () => {
  console.log('Hooray!');
});

gulp.task('html', () => {
  console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', () => {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postCSS([simpleVars, nestedCSS, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
