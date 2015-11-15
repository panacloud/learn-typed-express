/// <reference path="typings/tsd.d.ts" />

import gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
import nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
import mocha = require('gulp-mocha');
 
gulp.task('cleanServerDistDir', function(){
  return gulp.src('dist/server').pipe(rimraf());
}); 

gulp.task('cleanClientDistDir', function(){
  return gulp.src('dist/client').pipe(rimraf());
}); 
 
gulp.task('buildServer', ['cleanServerDistDir'],  function () {
  var tsResult = gulp.src('./src/server/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('./dist/server/'));
});

gulp.task('copySystemLib', ['cleanClientDistDir'],  function () {
  var clientResult = gulp.src('./node_modules/systemjs/dist/system.src.js')
  return clientResult.pipe(gulp.dest('./dist/client/lib'));
});

gulp.task('copyAngular2Lib', ['cleanClientDistDir'],  function () {
  var clientResult = gulp.src('./node_modules/angular2/bundles/angular2.dev.js')
  return clientResult.pipe(gulp.dest('./dist/client/lib'));
});

gulp.task('copyHTMLClient', ['cleanClientDistDir'],  function () {
  var clientResult = gulp.src('./src/client/**/*.html')
  return clientResult.pipe(gulp.dest('./dist/client/'));
});

gulp.task('buildStyles', ['cleanClientDistDir'], function() {
    gulp.src('./src/client/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/client/'));
});

gulp.task('buildClient', ['copyHTMLClient', 'copySystemLib', 'copyAngular2Lib', 'buildStyles'],  function () {
  var clientResult = gulp.src('./src/client/**/*.ts')
  .pipe(ts({
        module: 'CommonJS',
        target: 'ES5',
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: true
      }));
  return clientResult.pipe(gulp.dest('./dist/client/'));
});


gulp.task('nodemon', ['buildServer', 'buildClient', 'watchServer', 'watchClient'], function(){
    nodemon({
        script: './dist/server/app.js',
        ignore: ["test/*"]
    }).on('restart', function(){
        console.log('nodemon restarted app.js');
    })
})

gulp.task('watchServer', function() {
  gulp.watch('./src/server/**/*.ts', ['buildServer']);
});

gulp.task('watchClient', function() {
  gulp.watch('./src/client/**/*.*', ['buildClient']);
});

gulp.task('default', ['nodemon']);