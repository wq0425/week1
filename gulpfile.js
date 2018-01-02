//引入
const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');
gulp.task('minifycss', function () {
    gulp.src('Content/css/*.css')
        .pipe(concat('st.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('Content/css'));
    });
gulp.task('web', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            fallback: 'index.html'
            }))
    });
gulp.task('server', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8090,
            fallback: 'index.html'
            }))
    })
gulp.task('default', ['minifycss', 'web', 'server']);