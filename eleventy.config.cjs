module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy({"sitemap.xml": "sitemap.xml"});
  eleventyConfig.addPassthroughCopy({"_redirects": "_redirects"});
  return {
    dir: { input: "src", output: "_site" },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
