import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogPosts from "../components/blogposts"
import Seo from "../components/seo"

const BlogPage = ({ data, pageContext }) => {
  //Traemos los posts del query de graphQL y nos aseguramos de que vengan ordenados por fecha DESC
  const posts = data.allMdx.nodes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return dateB - dateA
  })

  const { numPages, currentPage } = pageContext

  return (
    <Layout pageTitle="My Blog Posts">
      <section className="max-w-screen-xl mx-auto flex justify-center flex-wrap gap-4 pt-20">
        <BlogPosts posts={posts} currentPage={currentPage} />
      </section>

      {/* Paginación */}
      <div className="flex justify-center items-center max-w-screen-lg mx-auto py-2 mt-20 text-center text-xl bg-white border-y border-y-slate-200">
        {Array.from({ length: numPages }).map((_, index) => (
          <Link
            key={`pagination-number${index + 1}`}
            to={`/blog/${index === 0 ? "" : index + 1}`}
            className={
              currentPage === index + 1
                ? "mx-1 text-amber-400 p-1 border-b-4 border-b-amber-400 font-medium"
                : "mx-1 text-slate-300 p-1 hover:text-slate-400 font-medium"
            }
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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
