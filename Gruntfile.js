'use strict'

var PORT = 9000;

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: { dist: [ 'temp/', 'dist/' ] },
		copy: { dist: { files: [
			{ cwd: 'src/', expand: true, src: ['**/.htaccess', '**/*.html'], dest: 'dist/', dot: true },
			{ cwd: 'bower_components/bootstrap/dist/fonts/', expand: true, src: '*.*', dest: 'dist/fonts/'},
			{ cwd: 'src/img/', expand: true, src: '*.*', dest: 'dist/img/'}
		]}},
		uglify: { dist: { expand: true, cwd: 'src/js/', src: '*.js', dest: 'temp/js/', ext: '.min.js'} },
		less: { dist: { expand: true, cwd: 'src/css/', src: '*.less', dest: 'temp/css/', ext: '.css'} },
		cssmin: { dist: { files: [{ expand: true, cwd: 'temp/css/', src: ['*.css', '!*.min.css'], dest: 'temp/css/', ext: '.min.css'}] } },
		concat: { dist: {
			files: {
				'dist/js/main.min.js': [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/knockout/dist/knockout.js',
					'temp/js/cast.min.js'
				],
				'dist/css/main.min.css': [
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'temp/css/cast.min.css'
				]
			}
		}},
		open: { dist: { path: 'dist/index.html'} }
	});

	grunt.registerTask('default', [
		'clean',
		'copy',
		'uglify',
		'less',
		'cssmin',
		'concat'
	]);
};