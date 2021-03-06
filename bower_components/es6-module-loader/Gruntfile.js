'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*\n *  <%= pkg.name %> v<%= pkg.version %>\n' +
        '<%= pkg.homepage ? " *  " + pkg.homepage + "\\n" : "" %>' +
        ' *  Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dist: [
        'lib/index.js',
        'lib/loader.js',
        'lib/system.js'
      ]
    },
    concat: {
      dist: {
        src: [
          'node_modules/when/es6-shim/Promise.js',
          'src/polyfill-wrapper-start.js',
          'dist/<%= pkg.name %>.js',
          'src/polyfill-wrapper-end.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      },
      polyfillOnly: {
        src: [
          'src/polyfill-wrapper-start.js',
          'dist/<%= pkg.name %>.js',
          'src/polyfill-wrapper-end.js'
        ],
        dest: 'dist/<%= pkg.name %>-sans-promises.js'
      }
    },
    esnext: {
      dist: {
        src: [
          'src/loader.js',
          'src/system.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    'string-replace': {
      dist: {
        files: {
          'dist/<%= pkg.name %>.js': 'dist/<%= pkg.name %>.js'
        },
        options: {
          replacements:[{
            pattern: 'var $__Object$getPrototypeOf = Object.getPrototypeOf;\n' +
              'var $__Object$defineProperty = Object.defineProperty;\n' +
              'var $__Object$create = Object.create;',
            replacement: ''
          }]

        }
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>\n',
        compress: {
          drop_console: true
        }
      },
      dist: {
        options: {
          banner: '<%= meta.banner %>\n'
        },
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
      polyfillOnly: {
        src: 'dist/<%= pkg.name %>-sans-promises.js',
        dest: 'dist/<%= pkg.name %>-sans-promises.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-esnext');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('compile', ['esnext', 'string-replace', 'concat']);
  grunt.registerTask('default', [/*'jshint', */'esnext', 'string-replace', 
                     'concat', 'uglify']);
};
