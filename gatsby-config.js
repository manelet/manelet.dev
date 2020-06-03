const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const tailwind = require("tailwindcss")('./tailwind.config.js')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          // process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
          // process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
          // purgecss({
          //   content: ['./src/**/*.js'],
          //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          // })          
        ]
      }
    }
  ]
}
