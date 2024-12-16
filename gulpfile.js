'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Compile SCSS into minified CSS
function compileSass() {
  return gulp.src('./sass/styles.scss')   // Specify your main entry SCSS file
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: 'styles.min' }))
    .pipe(gulp.dest('./css'));
}

// Minify JS
function minifyJS() {
  return gulp.src('./js/scripts.js')  // Your main JS file
    .pipe(uglify())
    .pipe(rename({ basename: 'scripts.min' }))
    .pipe(gulp.dest('./js'));
}

// Watch task: watch SCSS files and run compileSass on changes
function watchFiles() {
  // Whenever any .scss file in sass folder or subfolders changes, run `compileSass`
  gulp.watch('./sass/**/*.scss', compileSass);
  // Watch for changes in scripts.js and re-minify JS
  gulp.watch('./js/scripts.js', minifyJS);
}

// Define tasks
gulp.task('sass', compileSass);
gulp.task('minify-js', minifyJS);
gulp.task('watch', watchFiles);

// Default task: compile Sass, minify JS, then start watching
gulp.task('default', gulp.series('sass', 'minify-js', 'watch'));