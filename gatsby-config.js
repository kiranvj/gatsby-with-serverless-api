module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
    siteUrl: 'https://kiranvj.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    }
  ]
};
