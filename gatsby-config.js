module.exports = {
  siteMetadata: {
    title: 'Vitor Martins',
    description: 'Software Engineer',
    siteUrl: `https://vitormartins.dev`,
    author: 'Vitor Martins',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vitor Martins Portfolio`,
        short_name: `Vitor Martins`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500', '700'],
            },
            {
              family: 'Raleway',
              variants: ['200', '300', '400', '500', '700'],
            },
            {
              family: 'Montserrat',
              variants: ['300', '400', '500', '700'],
            },
            {
              family: 'Lato',
              variants: ['300', '400', '500', '700'],
            },
            {
              family: 'Karla',
              variants: ['300', '400', '500', '700'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
