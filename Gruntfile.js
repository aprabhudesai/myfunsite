module.exports = function init(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015', 'react'] }]],
          src: ['src/assets/jsx/App.jsx'],
          dest: 'public/js/app.js'
        }
      }
    },
    watch: {
      assets: {
        files: ['assets/jsx/**/*.{js,jsx}', 'src/*.js', 'src/**/*.js', 'src/**/**/*.js'],
        tasks: ['browserify'],
        interrupt: true
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
