var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var del = require('del');
//var sass = require('gulp-sass');
//var less = require('gulp-less');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');

gulp.task('clean',function(){
	del(['./client/dist/js/*.js','./client/dist/css/*.css']);

});


//gulp.task('sass',function(){
//	return gulp.src('./client/src/css/**/*.scss')
//	.pipe(sass())
//	.pipe(gulp.dest('./client/dist/css'))
//});

//gulp.task('less',function(){
//	return gulp.src('./client/src/css/**/*.less')
//	.pipe(less())
//	.pipe(gulp.dest('./client/dist/css'))
//})

gulp.task('transpile',function(){
	return gulp.src('./client/src/index.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('./client/dist/js/'));
})

gulp.task('build',function(callback){
	runSequence('clean',['transpile'],callback)
})

gulp.task('run',shell.task(
['nodemon ./server/server.js']
))
