var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var del = require('del');
var sass = require('gulp-sass');
var less = require('gulp-less');
var runSequence = require('run-sequence');

gulp.task('clean',function(){
	del(['./dist/*.js','./dist/css/*.css']);

});

gulp.task('sass',function(){
	return gulp.src('src/css/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('less',function(){
	return gulp.src('src/css/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dist/css'))
})

gulp.task('transpile',function(){
	return gulp.src('src/index.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('./dist/'));
})

gulp.task('build',function(callback){
	runSequence('clean',['sass','less','transpile'],callback)
})
