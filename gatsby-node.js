const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              type
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.nodes
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  //Create blog lists pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //Create blog post details
  posts.forEach((post, i) => {
    const pageNumber = Math.ceil((i + 1) / postsPerPage)

    createPage({
      path:
        pageNumber === 1
          ? `/blog/${post.frontmatter.slug}`
          : `/blog/${pageNumber}/${post.frontmatter.slug}`,
      component: path.resolve("./src/templates/postDetail.js"),
      context: {
        id: post.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
