const slugify = require("slugify")

// Netlify redirects
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "https://cautioncreation.netlify.com/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  })
	createRedirect({
    fromPath: "https://www.cautioncreation.ca/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  })
	createRedirect({
    fromPath: "https://cautioncreation.ca/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  })
}

// Create blog page slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.fields.sourceName === "articles") {
    const slug = slugify(node.frontmatter.title, {lower: true, strict: true})
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      articles: allMarkdownRemark(filter: {fields: {sourceName: {eq: "articles"}}}) {
        edges {
          node {
						id
						fields {
							slug
						}
          }
        }
			}
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges

  articles.forEach((article) => {
    createPage({
      path: `/blog/${article.node.fields.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.id,
      },
    })
  })
}
