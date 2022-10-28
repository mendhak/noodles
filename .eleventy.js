module.exports = (function(eleventyConfig){

    eleventyConfig.setDynamicPermalinks(false);

    //Remove image tag from the rendered Markdown content, because it's in the frontmatter.
    eleventyConfig.addFilter("removeImgTag", function(renderedMarkdown) {
        return renderedMarkdown.replace(/<img[^>]*>/g,"")
    });

    //Render a number of stars based on the rating passed in
    eleventyConfig.addFilter("stars", function(rating) {
        return "⭐".repeat(parseFloat(rating));
    });

    //Read Markdown files from the noodles directory.  
    eleventyConfig.addCollection('sections', function(collectionApi) {
        let sections = collectionApi.getFilteredByGlob('noodles/*.*');
        sections.forEach(item => {

            //Also, parse the content, grab the image path being used, and add that to the collection data. 
            const regexImage = /!\[[^\]]*]\(([^\)]*)\)/; 
            const match = item.template.frontMatter.content.match(regexImage);
            if(match){
                item.data.imagePath=match[1];
            }
            else {
                item.data.imagePath = item.data.image;
            }

            //Also, use the file name as the title, if a title is not already set in the frontmatter. 
            if(!item.data.title){
                item.data.title = item.fileSlug;
            }


        });

        console.log(sections);
        
        return sections;
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
