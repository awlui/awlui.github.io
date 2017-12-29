let gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('build-css', function() {
  console.log('build css')
  return gulp.src('src/scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('static/stylesheets'))
       .pipe(browserSync.stream());
});


gulp.task('serve', ['build-css'], function() {
  browserSync.init({
	  server: "./"
  });
  gulp.watch("src/scss/**/*.scss", ['build-css']);
  gulp.watch("index.html").on('change', browserSync.reload);
});
