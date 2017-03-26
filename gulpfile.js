'use strict'
var
    gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('deploy', shell.task(
    'node ./scripts/gh-pages-deploy.js',
    { verbose: true}
));
