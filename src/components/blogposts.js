import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPosts = ({ posts }) => {
  return (
    <>
      {posts.map(node => {
        const images = node.frontmatter.hero_image.childrenImageSharp.map(
          image => getImage(image.gatsbyImageData)
        )
        return (
          <article
            className="relative max-w-[400px] bg-zinc-100/5 backdrop-blur-sm py-4 px-5 border border-zinc-100 shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md transition"
            key={node.id}
          >
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <h2 className="text-3xl font-semibold text-zinc-700 mb-3 line-clamp-2 h-[72px]">
                {node.frontmatter.title}
              </h2>
            </Link>
            <p className="text-sm text-zinc-500 pb-1 border-b border-b-zinc-300 mb-3">
              Publicado: {node.frontmatter.date}
            </p>
            <div>
              {images.map(image => (
                <GatsbyImage
                  className="my-8 h-[240px]"
                  key={node.id}
                  image={image}
                  alt={node.frontmatter.hero_image_alt}
                />
              ))}
            </div>
            <p className="mb-6 line-clamp-3 text-sm text-slate-700">
              {node.frontmatter.description}
            </p>
            <div className="text-right">
              <Link
                className="mr-auto font-medium text-pink-500 hover:text-pink-300 transition"
                to={`/blog/${node.frontmatter.slug}`}
              >
                Leer artículo →
              </Link>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default BlogPosts
