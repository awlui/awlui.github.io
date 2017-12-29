let gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin')

gulp.task('build-css', function() {
  console.log('build css')
  return gulp.src('src/scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('static/stylesheets'))
       .pipe(browserSync.stream());
});

gulp.task('minify', function() {
  gulp.src('src/*.gif')
	.pipe(imagemin())
	.pipe(gulp.dest('static'))
});

gulp.task('serve', ['build-css'], function() {
  browserSync.init({
	  server: "./"
  });
  gulp.watch("src/scss/**/*.scss", ['build-css']);
  gulp.watch("index.html").on('change', browserSync.reload);
});
