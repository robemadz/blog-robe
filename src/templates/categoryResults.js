import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"

const CategoryResults = ({ data, pageContext }) => {
  const { category, originalPath } = pageContext
  const nodes = data.allMdx.nodes

  //Comparamos los id's del array con el que le pasamos en el mapeado en el return
  const findPostPath = id => {
    const originalPathObj = originalPath.find(obj => obj.id === id)
    return originalPathObj ? originalPathObj.originalPath : ""
  }

  return (
    <Layout pageTitle={category}>
      <section className="max-w-screen-lg mx-auto pt-20 px-4">
        <h2 className="text-3xl text-slate-800 mb-10 py-2 border-b-2 border-b-slate-800">
          {category}
        </h2>
        <div className="flex flex-col items-center flex-wrap gap-4">
          {nodes.map(node => (
            <article
              className="w-full max-w-screen-md bg-zinc-100/5 backdrop-blur-sm py-6 px-4 border border-slate-200 shadow-sm hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md transition"
              key={node.id}
            >
              <Link to={findPostPath(node.id)}>
                <h2 className="text-xl md:text-3xl font-semibold text-zinc-700 mb-3 line-clamp-2 md:h-[72px]">
                  {node.frontmatter.title}
                </h2>
              </Link>
              <p className="text-sm text-zinc-500 pb-1 border-b border-b-zinc-300 font-light mb-3">
                Publicado: {node.frontmatter.date}
              </p>
              <p className="mb-4 md:mb-6 line-clamp-3 text-sm text-slate-800 font-light">
                {node.frontmatter.description}
              </p>
              <div className="text-right">
                <Link
                  className="mr-auto font-medium tracking-wide text-amber-400 hover:text-amber-200 transition"
                  to={findPostPath(node.id)}
                >
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="category" />

export const query = graphql`
  query ($category: String!) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          description
        }
        id
      }
    }
  }
`

export default CategoryResults
