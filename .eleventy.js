const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/styles/**/*.scss"],
    outputDir: "_site/css"
  });
};
