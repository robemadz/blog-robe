import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const avatar = getImage(data.mdx.frontmatter.avatar)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section className="max-w-screen-lg mx-auto py-12 px-4 md:py-20 md:px-16 bg-white">
        <h2 className="font-medium text-2xl mb-8 md:text-4xl md:mb-10 line-clamp-2">
          {data.mdx.frontmatter.title}
        </h2>
        <div className="flex items-center mb-4 py-2 md:mb-6 border-y border-y-zinc-200">
          <GatsbyImage image={avatar} alt="avatar" className="w-8 md:w-10" />
          <p className="text-md text-slate-500 ml-2 md:text-lg">
            {data.mdx.frontmatter.author}
          </p>
          <p className="text-md text-slate-500 ml-2 md:text-lg">
            | {data.mdx.frontmatter.date}
          </p>
        </div>
        <article>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <div className="mx-auto mt-6 md:mt-8 leading-7 max-w-[85ch] text-slate-700 first-letter:text-5xl first-letter:mr-2 first-letter:float-left">
            {children}
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        avatar {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
