module.exports = {
  siteMetadata: {
    title: `Sous la fibre`,
    description: `Le podcast qui donne la parole aux arts visuels.`,
    author: `camille villard | cdltbisou.com`,
    image:
      "https://contenu.souslafibre.com/wp-content/uploads/2020/06/logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "contenu.souslafibre.com",
        // The protocol. This can be http or https.
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        // Set cookies that should be send with requests to WordPress as key value pairs
        verboseOutput: true,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/post",
          "**/podcast",
          "**/pages",
          "**/media",
          "**/tags",
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
