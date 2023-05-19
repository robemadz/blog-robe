import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPosts = ({ posts, currentPage }) => {
  return (
    <>
      {posts.map(node => {
        const images = node.frontmatter.hero_image.childrenImageSharp.map(
          image => getImage(image.gatsbyImageData)
        )
        return (
          <article
            className="w-full md:max-w-[400px] mx-4 bg-zinc-100/5 backdrop-blur-sm py-6 px-4 border border-slate-200 shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md transition"
            key={node.id}
          >
            <Link
              to={
                currentPage === 1
                  ? `/blog/${node.frontmatter.slug}`
                  : `/blog/${currentPage}/${node.frontmatter.slug}`
              }
            >
              <h2 className="text-xl md:text-3xl font-semibold text-zinc-700 mb-3 line-clamp-2 md:h-[72px]">
                {node.frontmatter.title}
              </h2>
            </Link>
            <p className="text-sm text-zinc-500 pb-1 border-b border-b-zinc-300 mb-3">
              Publicado: {node.frontmatter.date}
            </p>
            <div className="my-4 md:my-8">
              {images.map(image => (
                <GatsbyImage
                  className="aspect-video"
                  key={node.id}
                  image={image}
                  alt={node.frontmatter.hero_image_alt}
                />
              ))}
            </div>
            <p className="mb-4 md:mb-6 line-clamp-3 text-sm text-slate-700">
              {node.frontmatter.description}
            </p>
            <div className="text-right">
              <Link
                className="mr-auto font-medium text-amber-400 hover:text-amber-200 transition"
                to={
                  currentPage === 1
                    ? `/blog/${node.frontmatter.slug}`
                    : `/blog/${currentPage}/${node.frontmatter.slug}`
                }
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
