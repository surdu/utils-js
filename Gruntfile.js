module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		concat: {
			dist: {
				src: [
					"src/extensions-core.js",
					"src/*.js"
				],
				dest: "dist/utils.js"
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
			},
			dist: {
				files: {
					'dist/utils.min.js': ["dist/utils.js"]
				}
			}
		},

		jasmine: {
			src: "dist/utils.min.js",
			options: {
				specs: [
					"specs/*-spec.js",
					"!specs/*node-spec.js",
				],
				vendor: "http://code.jquery.com/jquery-2.1.3.min.js"
			}
		},

		jasmine_nodejs: {
			options: {
				specNameSuffix: 'node-spec.js',
			},

			dist: {
				specs:[
					"specs/**-node-spec.js"
				]
			}
		},

		watch: {
			files: ["src/*.js", "specs/*-spec.js"],
			tasks: "test",
			options: {
				debounceDelay: 1000,
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'src/**/*.js', 'specs/**/*.js']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-jasmine-nodejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask("default", ["concat", "uglify"]);
	grunt.registerTask("test", ["default", "jshint", "jasmine_nodejs", "jasmine"]);
};
