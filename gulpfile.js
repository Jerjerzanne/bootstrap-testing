
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const cons = require('consolidate');
const hbs = require('handlebars');
const liquid = require('tinyliquid');
const nunjucks = require('nunjucks');

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const reload = browserSync.reload;


const watchfiles = {
  scss: './scss/*.scss',
  css: 'build/css',
  html: './docs/**/*.html',
  js: './js/*.js'
};

const filterFunc = (src, dest) => {
  //console.log(src);
  return true;
}

// Template processing
gulp.task('template', function () {

  fs.copySync('./docs', './build', { filter: filterFunc }, err => {
    if (err) return console.error(err)

    console.log('success!')
  })


  var pages = glob.sync("./build/**/*.html");
  var files = ["1", "2", "3"];
  console.log('Files for templating: ' + pages[0]);
  var i = 0;
  pages.forEach(function (path) {
    cons.nunjucks(path, { baseurl: '', title: 'hey', body: 'you see' })
      .then(function (html) {
        fs.writeFileSync(path, html);
      })
      .catch(function (err) {
        throw err;
      });
  });
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'template','js'], function () {

  browserSync.init({
    server: "./build/",
    index: "./index.html"
  });



  gulp.watch(watchfiles.scss, ['sass']).on('change', reload);
  gulp.watch(watchfiles.html, ['template']).on('change', reload);
  gulp.watch(watchfiles.js, ['js']).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function () {
  return gulp.src('./scss/combined.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(watchfiles.css))
    .pipe(reload({ stream: true }));

});


//Building the js for the distribution folder
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
      .pipe(gulp.dest("build/js"));
});
gulp.task('default', ['serve']);