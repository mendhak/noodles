module.exports = (function(eleventyConfig){

    //Remove image tag from the rendered Markdown content, because it's in the frontmatter.
    eleventyConfig.addFilter("myFilter", function(value) {
        return value.replace(/<img[^>]*>/g,"")
      });

    //Read Markdown files from the noodles directory.  
    eleventyConfig.addCollection('sections', function(collectionApi) {
        return sections = collectionApi.getFilteredByGlob('noodles/*.*');
    });

    // Copies the images files straight into the output folder, so that the HTML can reference it. 
    // Without this, the images get copied to output/noodles/images/ instead of output/images/.  
    // This allows the MD to reference the image files and the output HTML too. 
    eleventyConfig.addPassthroughCopy({ "noodles/images": "images" });

    //Don't process README.md, that's for me!
    eleventyConfig.ignores.add("README.md");

    // Config values that could be passed via arguments but it's just easier in here. 
    return {
        dir: {
          input: ".",
          output: "output",
          templateFormats: ["html"]
        }
    }

});
