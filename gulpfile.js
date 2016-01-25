var gulp = require("gulp"),
  connect = require('gulp-connect'),
  protractor = require("gulp-protractor").protractor,
  jsonServer = require('gulp-json-srv');

gulp.task('json-server', function() {
  jsonServer.start(); // start serving 'db.json' on port 3000
});

gulp.task('connect', function() {
  connect.server({
    port: 8080
  });
});

gulp.task('e2e', ['json-server', 'connect'], function() {
  return gulp.src(["test.js"])
    .pipe(protractor({
      configFile: "protractor.config.js",
      args: ['--baseUrl', 'http://127.0.0.1:8080']
    }))
    .on('error', function(e) {
      throw e
    })
});
