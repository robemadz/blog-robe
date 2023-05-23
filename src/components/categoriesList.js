import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CategoriesList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  const categories = data.allMdx.group.map(category => category.fieldValue)

  return (
    <>
      <h2 className="text-4xl font-light tracking-wide text-slate-800 py-2 mb-10 border-b-2 border-b-slate-700">
        Categories
      </h2>
      <div className="flex justify-center gap-4 flex-wrap text-lg font-light text-slate-600">
        {categories.map(category => (
          <Link
            className="bg-amber-100 px-4 py-2 rounded-full hover:bg-amber-200 hover:text-slate-700 transition"
            key={category}
            to={`blog/${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </>
  )
}

export default CategoriesList
