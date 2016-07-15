var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/main.scss")
        .pipe(sass())
        .pipe(concatCss("bundle.css"))
        .pipe(postcss([autoprefixer({browsers: 'last 2 versions, ie 8-11'}), cssnano()]))
        // .pipe(cleanCSS())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

//Default task
gulp.task('default', ['serve']);

