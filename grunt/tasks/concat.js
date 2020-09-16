/**
 * concat.js
 *
 * Concats all the javascripts into single file
 *
 * @package grunt
 * @subpackage tasks
 */

module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            separator: ';',
        },
        dist: {
            files: {
                './js/build.js': [
                    '<%=paths.bower%>jquery/dist/jquery.js',
                    '<%=paths.bower%>bootstrap-sass/assets/javascripts/bootstrap.js',
                    '<%=paths.bower%>jquery-validation/dist/jquery.validate.js',
                    '<%=paths.js%>library/**/*.js',
                    '<%=paths.js%>app/*.js'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
