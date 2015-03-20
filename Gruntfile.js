module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {

      vanillaJS: {
        src: ["src/**/*.js"],
        dest: "dist/utils.js"
      },

      nodeJS: {
        src: [
          "src/**/*.js",
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

    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-file-append");

  grunt.registerTask("default", ["concat", "file_append"]);
};
