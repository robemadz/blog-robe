import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import BlogPosts from "../../components/blogposts"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes
  const postsPerPage = 2

  // Estado para controlar el número de página actual
  const [currentPage, setCurrentPage] = useState(1)

  // Cálculo de los índices de los posts a mostrar en la página actual
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  //Total de páginas
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Obtener los posts de la página actual
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Verificar si es la primera página
  const isFirstPage = currentPage === 1

  // Verificar si es la última página
  const isLastPage = currentPage === totalPages

  // Función para ir a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Función para ir a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <Layout pageTitle="My Blog Posts">
      <section className="max-w-screen-xl mx-auto flex justify-center flex-wrap gap-6 pt-20">
        <BlogPosts posts={currentPosts} />
      </section>
      <div className="flex flex-col justify-center mx-auto sm:flex-row mt-8 gap-4">
        <button
          className="px-5 py-3 mx-4 sm:mx-0 bg-white border border-gray-500 text-slate-800 hover:text-white hover:bg-gray-500 disabled:bg-gray-200/70 disabled:text-gray-400/60 disabled:border-none transition"
          onClick={prevPage}
          disabled={isFirstPage}
        >
          Página anterior
        </button>
        <button
          className="px-5 py-3 mx-4 sm:mx-0 bg-white border border-gray-500 text-slate-800 hover:text-white hover:bg-gray-500 disabled:bg-gray-200/70 disabled:text-gray-400/60 disabled:border-none transition"
          onClick={nextPage}
          disabled={isLastPage}
        >
          Página siguiente
        </button>
      </div>
      <div className="text-center mt-4 text-slate-700">
        <p>
          {currentPage} of {totalPages}
        </p>
      </div>
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
