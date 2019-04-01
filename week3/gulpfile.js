var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');

gulp.task('devsass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('devsass'))
})
gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 8080,
            open: true,
            //livereload: true,
            proxies: [{
                source: '/getData',
                target: 'http://localhost:3000/getData'
            }]
        }))
})
gulp.task('default', gulp.parallel('devsass', 'webserver', 'watch'));