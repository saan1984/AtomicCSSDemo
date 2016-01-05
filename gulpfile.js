var gulp = require('gulp');
var acss = require('gulp-atomizer');

gulp.task('atomize', function() {
    return gulp.src('./*.html')
        .pipe(acss())
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['atomize'])