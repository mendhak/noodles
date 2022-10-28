module.exports = (function(eleventyConfig){

    //Remove image tag from the rendered Markdown content, because it's in the frontmatter.
    eleventyConfig.addFilter("myFilter", function(value) {
        return value.replace(/<img[^>]*>/g,"")
      });

    //Read Markdown files from the noodles directory.  
    eleventyConfig.addCollection('sections', function(collectionApi) {
        return sections = collectionApi.getFilteredByGlob('noodles/*.*');
    });

    eleventyConfig.addPassthroughCopy({ "noodles/images": "images" });

    return {
        dir: {
          input: ".",
          output: "output",
          templateFormats: ["html", "md"]
        }
    }

});
