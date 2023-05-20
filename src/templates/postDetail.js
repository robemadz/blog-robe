import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const avatar = getImage(data.mdx.frontmatter.avatar)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section>
        <article className="max-w-screen-lg mx-auto pt-12 px-4 md:pt-16 md:px-16">
          <h2 className="font-semibold text-2xl mb-8 md:text-4xl md:mb-10 line-clamp-2 text-slate-800">
            {data.mdx.frontmatter.title}
          </h2>
          <div className="flex items-center mb-4 py-2 md:mb-6 border-y border-y-zinc-200 font-light">
            <GatsbyImage image={avatar} alt="avatar" className="w-8" />
            <p className="text-md text-slate-500 ml-2">
              By {data.mdx.frontmatter.author}
            </p>
            <p className="text-md text-slate-500 ml-2">
              | {data.mdx.frontmatter.date}
            </p>
          </div>

          <GatsbyImage
            class="w-full object-cover"
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />

          <div className="mx-auto py-6 md:px-8 md:py-12 leading-7 text-slate-800 font-light tracking-wide bg-white first-letter:text-5xl first-letter:mr-2 first-letter:float-left">
            <p>{data.mdx.body}</p>
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
      body
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
