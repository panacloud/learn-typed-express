var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
 
gulp.task('cleanBuiltDir', function(){
  return gulp.src('built').pipe(rimraf());
}); 

gulp.task('cleanCSSDir', function(){
  return gulp.src('./public/css').pipe(rimraf());
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


gulp.task('buildStyles', ['cleanCSSDir'], function(){
  var injectAppFiles = gulp.src('sass/mystyles/*.scss', {read: false});
 
  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }
 
  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };
 
  return gulp.src('sass/main.scss')
    .pipe(wiredep())
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['buildServer']);
});

gulp.task('watchStyles', function() {
  gulp.watch('sass/**/*.scss', ['buildStyles']);
});

gulp.task('default', ['nodemon']);