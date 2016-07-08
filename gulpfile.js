var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
// var inject = require('gulp-inject');

gulp.task('server', function() {
  connect.server({
    root: './',
    port: 8888,
  })
});

gulp.task('sass', function() {
  gulp.src('./sources/sass/pleisi.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('html', function() {
  gulp.src('./html/**/*.html')
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(['./sources/sass/**/*.sass'], ['sass']);
  gulp.watch(['./html/**/*.html'], ['html']);
})


gulp.task('default', ['server', 'watch']);
