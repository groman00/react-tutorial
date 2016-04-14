var gulp = require('gulp'),
  browserify = require('gulp-browserify'),
  rename = require('gulp-rename');

var buildRoot = './public',
  assetRoot = './src';

/*
 * JavaScript
 */

gulp.task('js', function () {
  gulp.src(assetRoot + '/js/main.js')
   .pipe(browserify({
    debug: true,
    transform: ['reactify']
  }))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(buildRoot + '/javascripts/'));

  gulp.src(assetRoot + '/js/pages/**.js')
   .pipe(browserify({
    debug: true,
    transform: ['reactify']
  }))
  .pipe(gulp.dest(buildRoot + '/javascripts/pages/'));

});

/*
 * CSS
 */

gulp.task('css', function () {
  gulp.src(assetRoot + '/css/style.css')
    .pipe(gulp.dest(buildRoot + '/stylesheets/'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', function(){
  gulp.watch(assetRoot + '/js/**/**', ['js']);
  gulp.watch(assetRoot + '/css/**', ['css']);
});

