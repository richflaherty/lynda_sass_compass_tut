module.exports = function(grunt) {
	// load plugins from package.json

	//uglify - minify js files into 1 file
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
				//destination of finished js
				'_/js/script.js' : ['_/components/js/*.js']
				} //files
			}// my target
		}, // uglify

		compass : {
			dev: {
				options: {
					config:'config.rb'
				}//options
			}//dev
		},//compass

		// new task - "watch"
		watch : {
			options: { livereload: true},
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			html : {
				files: ['*.html'],
			} // html

		}// watch
	})//initConfig

	// registering a default task - watch
	// only have to run 'grunt' on command line
	grunt.registerTask('default', 'watch');

} // exports