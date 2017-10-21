var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream')

gulp.task('scripts', function(){
    return gulp.src('./src/app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
});

gulp.task('html', function(){
    return gulp.src('html', function(){
        return gulp.src('./src/**/**.html')
        .pipe(gulp.dest('./build'))
    })
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'))
});


gulp.task('default', ['scripts', 'html', 'sass'], function(){
    gulp.watch('./src/app/**/**.js', ['scripts']);
    gulp.watch('./src/**/**.html', ['html']);
    gulp.watch('./src/**/**.scss', ['sass']);
});