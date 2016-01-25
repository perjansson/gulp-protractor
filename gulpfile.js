var gulp = require("gulp"),
    connect = require('gulp-connect'),
    protractor = require("gulp-protractor").protractor;

gulp.task('connect', function() {
  connect.server({
    port: 8080
  });
});

gulp.task('e2e', ['connect'], function() {
  return gulp.src(["test.js"])
    .pipe(protractor({
      configFile: "protractor.config.js",
      args: ['--baseUrl', 'http://127.0.0.1:8080']
    }))
    .on('error', function(e) {
      throw e
    })
});
