// https://github.com/youknowriad/zik42day/blob/master/client/gulpfile.js,

var gulp = require('gulp'),
	typescript = require('gulp-typescript'),
	del = require('del');

var baseSrc = 'public/src',
	baseDest = 'public/www',
	paths = {
		src: {
			ts: baseSrc + '/ts/**/*.ts',
			jsVendor: baseSrc + '/js-vendor/**/*.js'
		},
		dest: {
			js: baseDest + '/js',
			jsVendor: baseDest + '/js-vendor'
		}
	};

gulp.task(clean);
gulp.task(watch);
gulp.task('build', gulp.series(ts, jsvendor));
gulp.task('default', gulp.series('build'));

function clean (done) {
	del([baseDest], done);
}

function ts () {	
	var tsProject = typescript.createProject(baseSrc + '/ts/tsconfig.json');
	return tsProject.src()
    	.pipe(typescript(tsProject))
    	.pipe(gulp.dest(paths.dest.js));
}

function jsvendor () {
	
	return gulp.src(paths.src.jsVendor)
		.pipe(gulp.dest(paths.dest.jsVendor));
}

function watch () {
	gulp.watch(paths.src.js, ts);
	gulp.watch(paths.src.jsVendor, vendorjs);
}
