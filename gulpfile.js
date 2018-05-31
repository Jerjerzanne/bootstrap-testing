var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


//Building the css for the distribution folder
gulp.task('sass', function () {
    return gulp.src(['_scss/combined.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));

});

//Building the js for the distribution folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("dist/js"));
});

//==================================
//          Currently Unused
//==================================

/* 
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: {
            baseDir: "./src",
            index: "test.html"
        }
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/_scss/*.scss'], ['sass']);
    gulp.watch("src/test.html").on('change', browserSync.reload);
});
 */


gulp.task('default', ['sass', 'js']);