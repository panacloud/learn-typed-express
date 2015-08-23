var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
 
gulp.task('cleanServerDistDir', function(){
  return gulp.src('dist/server').pipe(rimraf());
}); 

gulp.task('cleanClientDistDir', function(){
  return gulp.src('dist/client').pipe(rimraf());
}); 
 
gulp.task('buildServer', ['cleanServerDistDir'],  function () {
  var tsResult = gulp.src('./server/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('./dist/server/'));
});

gulp.task('buildClient', ['cleanClientDistDir'],  function () {
  var clientResult = gulp.src('./client/**/*.*');
  return clientResult.pipe(gulp.dest('./dist/client/'));
});


gulp.task('nodemon', ['buildServer', 'buildClient', 'watchServer', 'watchClient'], function(){
    nodemon({
        script: './dist/server/app.js'
    }).on('restart', function(){
        console.log('nodemon restarted app.js');
    })
})

gulp.task('watchServer', function() {
  gulp.watch('./server/**/*.ts', ['buildServer']);
});

gulp.task('watchClient', function() {
  gulp.watch('./client/**/*.*', ['buildClient']);
});

gulp.task('default', ['nodemon']);