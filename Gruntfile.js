module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            master: {
                options: {
                    remote: 'git@github.com:disjfa/glynn-admin.git',
                    branch: 'master'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-build-control');

    grunt.registerTask('push', ['buildcontrol:master']);
};