var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

var src_pug = [
    './pug/**/*.pug',
    './pug/*.pug',
    '!./pug/**/_*.pug'
];

// gulp.task('pug', function(){
//     return gulp.src(src_pug)
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(gulp.dest('./docs/'));
// });

gulp.task('pug', function(){
    return gulp.src(src_pug)
        .pipe(plumber({
            errorHandler: function(err){
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./docs/'));
});

// gulp.task('watch',gulp.task('pug'),function() {
watch( src_pug, function(event) {
    watch( './pug/*.pug', function(event) {
        gulp.start('pug');
    });
});