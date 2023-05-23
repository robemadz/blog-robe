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
              category
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
    const originalPath =
      pageNumber === 1
        ? `/blog/${post.frontmatter.slug}`
        : `/blog/${pageNumber}/${post.frontmatter.slug}`
    createPage({
      path: originalPath,
      component: path.resolve("./src/templates/postDetail.js"),
      context: {
        id: post.id,
        originalPath,
      },
    })
  })

  /*  //Create category results
  posts.forEach(post => {
    const category = post.frontmatter.category
    createPage({
      path: `blog/${category}`,
      component: path.resolve("./src/templates/categoryResults.js"),
      context: {
        category: category,
        originalPath,
      },
    })
  })
}  */

  const categories = posts.map(post => post.frontmatter.category)

  categories.forEach(category => {
    const categoryPosts = posts.filter(
      post => post.frontmatter.category === category
    )
    const categoryOriginalPaths = categoryPosts.map(post => {
      const postIndex = posts.findIndex(p => p.id === post.id)
      const pageNumber = Math.floor(postIndex / postsPerPage) + 1
      const originalPath =
        pageNumber === 1
          ? `/blog/${post.frontmatter.slug}`
          : `/blog/${pageNumber}/${post.frontmatter.slug}`
      return {
        id: post.id,
        originalPath,
      }
    })

    createPage({
      path: `/blog/${category}`,
      component: path.resolve("./src/templates/categoryResults.js"),
      context: {
        category: category,
        originalPath: categoryOriginalPaths,
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
