module.exports = function(grunt) {
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          sass: {
               dist: {
                    options: {
                         style: 'expanded'
                    },
                    files: {
						'site/css/styles.css': 'src/styles.scss'
                    }
               }
          }
     });

     grunt.loadNpmTasks('grunt-contrib-csslint');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-sass');

	 grunt.registerTask('default', ['sass']);
};
