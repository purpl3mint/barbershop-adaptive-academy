var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", async function() {
  gulp.src("less/style.less")
    .pipe(less())
    .pipe(gulp.dest("css"));
});
