const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./**/**/*.html",
    "./**/**/*.svelte",
  ],

  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    ...(production ? [purgecss] : []),
  ],
};