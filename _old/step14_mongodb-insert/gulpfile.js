var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
 
gulp.task('cleanBuiltDir', function(){
  return gulp.src('built').pipe(rimraf());
}); 
 
gulp.task('buildServer', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
      typescript: require('typescript'),
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});


gulp.task('nodemon', ['buildServer', 'watch'], function(){
    nodemon({
        script: './built/server.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['buildServer']);
});

gulp.task('default', ['nodemon']);