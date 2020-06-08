const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPost {
        totalCount
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allWordpressWpPodcast(sort: { fields: date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressWpPodcast, allWordpressPost } = result.data

  const postTemplate = path.resolve(`./src/templates/PostPage.tsx`)
  allWordpressPost.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `article/${edge.node.slug}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  // Create Podcasts pages.
  const podcastTemplate = path.resolve(`./src/templates/PodcastPage.tsx`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  let counter = allWordpressWpPodcast.totalCount + 1

  allWordpressWpPodcast.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    counter--
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `episode/${edge.node.slug}`,
      component: slash(podcastTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        episode: counter,
      },
    })
  })
}
