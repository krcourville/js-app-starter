var
    gulp = require('gulp-help')(require('gulp')),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    templateCache = require('gulp-angular-templatecache'),
    less = require('gulp-less'),
    ngAnnotate = require('gulp-ng-annotate'),

    cfg = require('./gulpfile.config.js')
;

gulp.task('default', ['build']);

gulp.task('build', 'Build the HTML5 client', [
    'copy',
    'less',
    'vendor-js',
    'app-js',
    'templates'
]);

gulp.task('serve', 'Use this task for development workflow', [
    'build',
    'webserver-dev',
    'watch'
]);

/**
 * Selective choose and concat 
 * vendor files
 */
gulp.task('vendor-js', function () {
    return gulp
       .src(cfg.vendorfiles)
       .pipe(sourcemaps.init())
           .pipe(concat('vendor.js'))
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest(cfg.dist))
});


/**
 * Build Angular 1 js client
 */
gulp.task('app-js', function () {
    return gulp.src(cfg.appfiles)
       .pipe(sourcemaps.init())
           .pipe(ngAnnotate())
           .pipe(concat('app.js'))
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest(cfg.dist));
});

gulp.task('copy', function () {
    for (var key in cfg.copyfiles) {
        if (cfg.copyfiles.hasOwnProperty(key)) {
            var item = cfg.copyfiles[key];
            console.info('copy ', key, ' -> ', item);
            gulp
                .src([key])
                .pipe(gulp.dest(item));

        }
    }
});

/**
 * Precompile ng templates
 */
gulp.task('templates', function () {
    return gulp.src(cfg.templates)
           .pipe(templateCache({
               module: 'app'
           }))
           .pipe(gulp.dest(cfg.dist));
});

/**
 * Compile less to css
 */
gulp.task('less', function () {
    gulp.src(cfg.lessfiles)
       .pipe(sourcemaps.init())
           .pipe(less({
               rootpath: 'app'
           }))
           .pipe(concat('style.css'))
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest(cfg.dist));
});

/**
 * web server for development
 */
gulp.task('webserver-dev', function () {
    connect.server({
        root: 'app/dist',
        livereload: true,
        debug: true
    });
});

/**
 * All watches go here
 */
gulp.task('watch', function () {
    gulp.watch(cfg.appfiles, ['app-js']);
    gulp.watch(cfg.templates, ['templates']);
    gulp.watch(cfg.lessfiles, ['less']);

    watch(cfg.distfiles)
        .pipe(connect.reload());
});