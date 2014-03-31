'use strict';

module.exports = function(grunt) {
  var sprite = require('node-sprite');
  grunt.registerMultiTask('sprites', 'Generate sprite images', function() {
    var done  = this.async();
    var files = this.data.files

    sprite.sprites({
      path : files.src,
      dest : files.dest
    }, function(err, res) {
      done()
    });
  });
};