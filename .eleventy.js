module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./static/css/')
    eleventyConfig.addWatchTarget('./static/css/')
    eleventyConfig.addPassthroughCopy('./static/js/')
    eleventyConfig.addWatchTarget('./static/js/')
    eleventyConfig.addPassthroughCopy('./static/images/')
    eleventyConfig.addWatchTarget('./static/images/')

    const { DateTime } = require("luxon");
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });     

    return{
        dir: {
            input: '.',
            output: '_site',
            includes: 'includes',
        }
    }
};