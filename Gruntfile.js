module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      js: ['js/perfmatters.js', 'views/js/main.js']
    },
    csslint: {
      css: {
        options: {
          import: false
        },
        src: ['css/*.css', 'views/css/*.css']
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.css'
        }, {
          expand: true,
          cwd: 'views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/views/css',
          ext: '.css'          
        }]
      }
    },
    imagemin: {
      images: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/img'                  // Destination path prefix  
        }, {
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/views/images'                  // Destination path prefix  
        }]
      }
    },
    uglify: {
      targets: {
        files: [{
          expand: true,
          cwd: 'js',
          src: ['*.js', '!*.min.js'],
          dest: 'build/js',
          ext: '.js'
        }, {
          expand: true,
          cwd: 'views/js',
          src: ['*.js', '!*.min.js'],
          dest: 'build/views/js',
          ext: '.js'          
        }]
      }
    },
    htmlmin: {
      html: { 
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '',
          src: ['*.html'],
          dest: 'build/',    
          ext: '.html'
        },{
          expand: true,
          cwd: 'views',
          src: ['*.html'],
          dest: 'build/views',
          ext: '.html'
        }] 
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  
  grunt.registerTask('default', ['jshint', 'csslint', 'cssmin', 'imagemin', 'uglify', 'htmlmin'])
}