


var gulp = require("gulp");
var scss = require("gulp-sass");
var browserSync = require('browser-sync');
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'project'
        },
        notify:false
    });
});
gulp.task("compile", function () {
    gulp.src("project/*.scss").pipe(scss())
        .pipe(gulp.dest("project")).pipe(browserSync.reload({ stream: true }));

    });
gulp.task("watch", ['compile', 'browser-sync'], function () {
    gulp.watch("project/*.scss", ["compile"]);
    gulp.watch('project/*.html', browserSync.reload);
});
