var syntax        = 'scss'; // Syntax: sass or scss;
		

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
  gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
  gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
  gulp.watch('app/*.html', gulp.parallel('code'))
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));

