'use strict'

var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat')
var sourcemaps = require('gulp-soucermaps')
var nano = require('gulp-nano')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('workflow', function(){
    gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('default', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/js/'));
});



gulp.task('workflow', function () {
    gulp.src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'))
   });