// const Image = require("@11ty/eleventy-img");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css/");
    eleventyConfig.addWatchTarget("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addWatchTarget("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/js/");
    eleventyConfig.addWatchTarget("./src/assets/js/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    eleventyConfig.addWatchTarget("./src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("./src/assets/webfonts/");
    eleventyConfig.addWatchTarget("./src/assets/webfonts/");

    eleventyConfig.addPlugin(i18n, {
        translations,
        fallbackLocales: {
            '*': 'en'
        }
    });

    // TEMP demo of what could be an i18n-aware plural package?
    eleventyConfig.addFilter('pluralize', function (term, count = 1) {
        // Poorman's pluralize for now...
        return count === 1 ? term : `${term}s`;
    });

    // Browsersync
    // Redirect from root to default language root during --serve
    // Can also be handled by netlify.toml?
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware('*', (req, res) => {
                    if (req.url === '/') {
                        res.writeHead(302, {
                            location: '/en/'
                        });
                        res.end();
                    }
                });
            }
        }
    });
    // Configuration
    return {
        dir: {
            input: 'src'
        },
        markdownTemplateEngine: 'njk',
    };
}