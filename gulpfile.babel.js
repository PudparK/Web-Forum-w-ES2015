"use strinct";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
    console.log("From Gulp!");

    return browserify("src/app.js")
        .transform("babelify")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});