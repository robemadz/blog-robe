import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import BlogPosts from "../../components/blogposts"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  //Traemos los posts del query de graphQL y nos aseguramos de que vengan ordenados por fecha DESC
  const posts = data.allMdx.nodes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return dateB - dateA
  })

  return (
    <Layout pageTitle="My Blog Posts">
      <section className="max-w-screen-xl mx-auto flex justify-center flex-wrap gap-6 pt-20">
        <BlogPosts posts={posts} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
          description
          hero_image_alt
          hero_image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
