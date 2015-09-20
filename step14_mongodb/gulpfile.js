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

gulp.task('cleanJSDir', function(){
  return gulp.src('./public/js').pipe(rimraf());
});
 
gulp.task('buildServer', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});

gulp.task('buildClient', ['cleanJSDir'],  function () {
  var tsResult = gulp.src('viewsSrc/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('public/js'));
});


gulp.task('nodemon', ['buildServer', 'buildClient', 'buildStyles', 'watch', 'watchStyles', 'watchClient'], function(){
    nodemon({
        script: './built/server.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
});


gulp.task('buildStyles', ['cleanCSSDir'], function(){
  var injectAppFiles = gulp.src('sass/mystyles/*.scss', {read: false});
  var injectGlobalFiles = gulp.src('sass/globals/*.scss', {read: false});
 
 
  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }
 
  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };
  
  var injectGlobalOptions = {
    transform: transformFilepath,
    starttag: '// inject:global',
    endtag: '// endinject',
    addRootSlash: false
  };
 
  return gulp.src('sass/main.scss')
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
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

gulp.task('watchClient', function() {
  gulp.watch('viewsSrc/**/*.ts', ['buildClient']);
});

gulp.task('default', ['nodemon']);