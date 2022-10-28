module.exports = (function(eleventyConfig){
    eleventyConfig.addCollection('sections', function(collectionApi) {
        return sections = collectionApi.getFilteredByGlob('noodles/*.*');
    });
})
