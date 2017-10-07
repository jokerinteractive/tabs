var
  gulp = require('gulp'),
  less = require('gulp-less'),
  csso = require('gulp-csso'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
  return gulp.src('./less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%'] }))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['less'], function() {
  return gulp.watch('./less/**/*.less', { verbose: true, readDelay: 1000 }, ['less']);
});

gulp.task('default', ['less']);