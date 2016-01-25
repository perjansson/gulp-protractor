var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;

gulp.task('e2e', function() {
  return gulp.src(["test.js"])
    .pipe(protractor({
      configFile: "protractor.config.js"
    }))
    .on('error', function(e) {
      throw e
    })
});
