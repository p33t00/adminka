var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

/*gulp.task('log', function(){
	gutil.log('Some test log message.');
});*/

/*gulp.task('save_css', function(){
	gulp.src('app/css/main.css')
	.on('error', gutil.log)
	.pipe(gulp.dest('prod/main.css'));
	gutil.log('main.css file saved !');
});*/

gulp.task('watch', function(){
	gulp.watch('app/css/*.css', ['reload']);
	gulp.watch('app/*.html', ['reload']);
});

gulp.task('connect', function(){
	connect.server({
	    root: 'app',
	    livereload: true
	});
});

gulp.task('reload', function(){
  	gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});

gulp.task('start', ['connect', 'watch']);