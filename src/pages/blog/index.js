import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <section className="max-w-screen-xl mx-auto flex justify-center flex-wrap gap-4 mt-20">
        {data.allMdx.nodes.map(node => {
          const images = node.frontmatter.hero_image.childrenImageSharp.map(
            image => getImage(image.gatsbyImageData)
          )
          return (
            <article
              className="relative max-w-[400px] bg-white py-4 px-5 border border-zinc-100 shadow-sm mx-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md transition"
              key={node.id}
            >
              <h2 className="text-3xl font-semibold text-zinc-700 mb-3 line-clamp-2 h-[72px]">
                {node.frontmatter.title}
              </h2>
              <p className="text-sm text-zinc-500 pb-1 border-b border-b-zinc-300 mb-3">
                Publicado: {node.frontmatter.date}
              </p>
              <div>
                {images.map(image => (
                  <GatsbyImage
                    className="my-8"
                    key={node.id}
                    image={image}
                    alt={node.frontmatter.hero_image_alt}
                  />
                ))}
              </div>
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
          )
        })}
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
