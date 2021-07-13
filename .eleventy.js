const Image = require("@11ty/eleventy-img");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');
const gap = 8;
const startWidthes = [320, 360, 375, 414, 428, 768, 1024, 1280, 1440];

async function imageFull(src, alt, sizes = "100vw") {
    if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    let endWidthes = [];
    for (let i = 0; i < startWidthes.length; i++) {
        let x1 = startWidthes[i] - gap * 4;
        endWidthes.push(x1);
        let x2 = x1 * 2;
        endWidthes.push(x2);

        if (startWidthes[i] < 768) {
            let x3 = x1 * 3;
            endWidthes.push(x3);
        } else {
            let x15 = x1 * 1.5;
            endWidthes.push(x15);
        }
    }

    let metadata = await Image(src, {
        widths: endWidthes,
        formats: ['webp', 'jpeg'],
        outputDir: './_site/assets/img'
    });

    let lowsrc = metadata.jpeg[19];

    return `<picture>
${Object.values(metadata).map(imageFormat => {
  return `              <source type="${imageFormat[0].sourceType}" srcset="./../assets${imageFormat.map(entry => entry.srcset).join(", ./../assets")}" sizes="${sizes}">`;    }).join("\n")}
                <img
                    src="./../assets${lowsrc.url}"
                    width="${lowsrc.width}"
                    height="${lowsrc.height}"
                    alt="${alt}"
                    loading="lazy"
                    decoding="async">
          </picture>
`;
}

async function imageHalf(src, alt, sizes = "100vw") {
    if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let endWidthes = [];
    for (let i = 0; i < startWidthes.length; i++) {
        let x1 = startWidthes[i] - gap * 4;
        endWidthes.push(x1);

        if (startWidthes[i] < 600) {
            let x2 = x1 * 2;
            endWidthes.push(x2);
            let x3 = x1 * 3;
            endWidthes.push(x3);
        } else if (startWidthes[i] >= 600 && startWidthes[i] < 768) {
            let x2 = (startWidthes[i] / 2 - gap * 4) * 2;
            endWidthes.push(x2);
            let x3 = (startWidthes[i] / 2 - gap * 4) * 3;
            endWidthes.push(x3);
        } else {
            let x15 = (startWidthes[i] / 2 - gap * 4) * 1.5;
            endWidthes.push(x15);
            let x2 = (startWidthes[i] / 2 - gap * 4) * 2;
            endWidthes.push(x2);
        }
    }

    let metadata = await Image(src, {
        widths: endWidthes,
        formats: ['webp', 'jpeg'],
        outputDir: './_site/assets/img'
    });

    let lowsrc = metadata.jpeg[13];

    return `<picture>
${Object.values(metadata).map(imageFormat => {
    return `              <source type="${imageFormat[0].sourceType}" srcset="./../assets${imageFormat.map(entry => entry.srcset).join(", ./../assets")}" sizes="${sizes}">`;    }).join("\n")}
                <img
                    src="./../assets${lowsrc.url}"
                    width="${lowsrc.width}"
                    height="${lowsrc.height}"
                    alt="${alt}"
                    loading="lazy"
                    decoding="async">
          </picture>
`;
}

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
    eleventyConfig.addNunjucksAsyncShortcode("imageFull", imageFull);
    eleventyConfig.addLiquidShortcode("imageFull", imageFull);
    eleventyConfig.addJavaScriptFunction("imageFull", imageFull);
    eleventyConfig.addNunjucksAsyncShortcode("imageHalf", imageHalf);
    eleventyConfig.addLiquidShortcode("imageHalf", imageHalf);
    eleventyConfig.addJavaScriptFunction("imageHalf", imageHalf);

    eleventyConfig.addPlugin(i18n, {
        translations,
        fallbackLocales: {
            'es-ES': 'en-GB'
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
                            location: '/en-GB/'
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