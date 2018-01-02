var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json"),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    addsrc = require('gulp-add-src');

gulp.task("default", function () {
    var append_to = './index.js', rename_to = 'check',dest_to='dest';
    execute(append_to,
        rename_to,
        dest_to);
});

function execute(append_to,rename_to,dest_to){
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(addsrc(append_to))
        .pipe(sourcemaps.init())
        .pipe(concat(rename_to+'.js'))
        .pipe(gulp.dest(dest_to))
        .pipe(rename(rename_to+'.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest_to));
}
