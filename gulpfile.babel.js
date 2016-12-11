"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import livereload from "gulp-livereload";


gulp.task("transpile", () => {
    console.log("From Gulp!");

    return browserify("src/app.js")
        .transform("babelify")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"))
        .pipe(livereload());
});

gulp.task("watch", ["transpile"], () => {
    livereload.listen();
    gulp.watch("src/**/*.js", ["transpile"]);
});

gulp.task("default", ["transpile"]);