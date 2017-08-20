var gulp = require('gulp'),
    gutil = require('gulp-util'),
    kawa = require('gulp-coffee'),
    brwzfy = require('gulp-browserify'),
    kokokat = require('gulp-concat');
var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];
gulp.task('kawaz',function () {
    gulp.src(coffeeSources)
        .pipe(kawa({bare:true})
            .on('error',gutil.log))
        .pipe(gulp.dest('components/scripts'))
});
gulp.task('razem',function () {
    gulp.src(jsSources)
        .pipe(kokokat('script.js'))
        .pipe(brwzfy())
        .pipe(gulp.dest('builds/development/js'))
});