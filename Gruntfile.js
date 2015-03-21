module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      vanillaJS: {
        src: ["src/*.js"],
        dest: "dist/utils.js"
      },

      nodeJS: {
        src: [
          "src/*.js",
          "!src/extensions-jquery.js"
        ],
        dest: "dist/utils-node.js"
      },
    },

    file_append: {
      vanillaJS: {
        files: [
          {
            append: "\nvar utils = new Utils();",
            input: "dist/utils.js"
          }
        ]
      },

      nodeJS: {
        files: [
          {
            append: "\nmodule.exports = new Utils();",
            input: "dist/utils-node.js"
          }
        ]
      },
    },

    jasmine: {
      src: "src/*.js",
      options: {
        specs: "specs/*-spec.js",
        vendor: "http://code.jquery.com/jquery-2.1.3.min.js"
      }
    },

    watch: {
      files: ["src/*.js", "specs/*-spec.js"],
      tasks: "test",
      options: {
        debounceDelay: 1000,
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-file-append");
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["concat", "file_append"]);
  grunt.registerTask("test", ["jasmine"]);
};
