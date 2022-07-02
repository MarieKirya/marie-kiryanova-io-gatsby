module.exports = {
  siteMetadata: {
    title: `Marie Kiryanova`,
    description: `See my past jobs, clients, projects, and thoughts.`,
    author: `Marie Kiryanova <marie@kiryanova.io>`,
    siteUrl: `https://marie.kiryanova.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130717060-2",
      },
    },
    `gatsby-plugin-netlify`,
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://cms-marie.n-n.moe/`,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/submission`,
          `/easter-egg`
        ]
      }
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
