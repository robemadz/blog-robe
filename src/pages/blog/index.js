import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <section className="max-w-screen-2xl mx-auto flex flex-col justify-between md:flex-row gap-4 mt-20">
        {data.allMdx.nodes.map(node => (
          <article
            className="bg-white py-4 px-5 border border-zinc-100 shadow-sm mx-4"
            key={node.id}
          >
            <h2 className="text-3xl font-semibold text-zinc-700 mb-2">
              {node.frontmatter.title}
            </h2>
            <p className="text-sm text-zinc-500 pb-1 border-b border-b-zinc-300 mb-3">
              Publicado: {node.frontmatter.date}
            </p>
            <p className="mb-6">{node.frontmatter.description}</p>
            <div className="text-right">
              <Link
                className="mr-auto font-medium text-zinc-700 hover:text-zinc-400 transition"
                to={`/blog/${node.frontmatter.slug}`}
              >
                Leer artículo →
              </Link>
            </div>
          </article>
        ))}
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
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
