/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
  	},
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'es',
        useLangKeyLayout: false
      }
  	},
    {
      resolve: `gatsby-plugin-react-helmet`
    }
  ]
}
