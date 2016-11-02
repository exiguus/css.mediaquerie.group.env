module.exports = function(grunt) {
  //var configCMS = "sitecore";

  // Project configuration.
  grunt.initConfig({
  //get infos from package.json like version and project name
  pkg: grunt.file.readJSON('package.json'),

  group_css_media_queries: {
    dist: {
      dest: 'build/style.css',
      src: 'build/style.css'
    },
  },


  //combine files
  concat: {
    options: {
      process: true,
      banner: '/*! <%= pkg.name %> - <%= pkg.author %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */' +
        "\n"
    },
    dist: {
      src: [
          'build/base.css',
          'build/style.css'
      ],
      dest: 'dist/screen.css'
    }
  },

  sass: {
    build: {
      options: {
        style: 'expanded',
        sourcemap: 'none'
      },
      files: [{
        expand: true,
        cwd: 'scss',
        src: ['base.scss','style.scss'],
        dest: 'build',
        ext: '.css'
      }]
    }
  },

  clean: {
    dist: ["dist/**"],
    build: ["build/**"]
  },

  });

  //to use the tools we need to load them

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-group-css-media-queries');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //running task with "grunt"
  var taskClean = ['clean'];
  var taskDist = ['clean:dist','sass','group_css_media_queries','concat'];

  grunt.registerTask('cleanup', taskClean);
  grunt.registerTask('dist', taskDist);

  grunt.registerTask('default', taskDist);

};
