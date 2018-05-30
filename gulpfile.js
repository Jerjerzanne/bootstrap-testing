var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Utility

var glob = require('glob');

//Testing

//var pa11y = require('pa11y-ci');


//Building the css for the distribution folder
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', '_scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));

});

//Building the js for the distribution folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

//==================================
//          Currently Unused
//==================================


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

//tests all html files of the static site
gulp.task('files',{
    allowedStandards: 'WCAG2AA',
    level: 'error',
    chromeLaunchConfig: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    }
}, function () {
    glob('./_site/**/*.html', function (err, files) {
        console.log(files);
        for (i = 0; i < files.length; i++) {
            pa11y(files[i]).then((results) => {
                const cliResults = cli.results(results);
                console.log(cliResults);
            });
        };

    });
});


gulp.task('default', ['sass', 'js']);