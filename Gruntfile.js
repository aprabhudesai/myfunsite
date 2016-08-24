module.exports = function init(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-clear');

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015', 'react'] }]]
        },
        src: ['app/index.js'],
        dest: 'public/js/app.js'
      }
    },
    watch: {
      assets: {
        files: ['app/*.{js,jsx}','app/**/*.{js,jsx}', 'src/*.js', 'src/**/*.js', 'src/**/**/*.js'],
        tasks: ['browserify'],
        interrupt: true
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
