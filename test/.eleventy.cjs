const eleventy = require('11ty');
const highlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const navigation = require('@11ty/eleventy-navigation');
const htmlmin = require('@sardine/eleventy-plugin-tinyhtml');

module.exports = eleventy(function (config) {

  config.addPlugin(highlight, {

  })

  config.addPlugin(navigation)


  return {
    dir: {
      input: 'site',
      output: 'public'
    }
  };

});
