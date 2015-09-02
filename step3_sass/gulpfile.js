var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
 
gulp.task('cleanBuiltDir', function(){
  return gulp.src('built').pipe(rimraf());
}); 
 
gulp.task('buildServer', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});


gulp.task('nodemon', ['buildServer', 'buildStyles', 'watch', 'watchStyles'], function(){
    nodemon({
        script: './built/server.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
});

gulp.task('buildStyles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['buildServer']);
});

gulp.task('watchStyles', function() {
  gulp.watch('sass/**/*.scss', ['buildStyles']);
});

gulp.task('default', ['nodemon']);