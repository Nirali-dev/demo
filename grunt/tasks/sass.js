/**
 * sass.js
 *
 * Generates stylesheets using sass
 *
 * @package grunt
 * @subpackage tasks
 */

module.exports = function(grunt) {
    grunt.config('sass', {
        options: {
            includePaths: [
            '<%=paths.bower%>bootstrap-sass/assets/stylesheets'
            ]
        },
        dist: {
            options: {
                outputStyle: 'nested',
                compass: true,
                cacheLocation: './cache/'
            },
            files: {
                '<%=paths.css%>style.css': '<%=paths.scss%>style.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
