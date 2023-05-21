import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 2) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
          }
          id
        }
      }
    }
  `)
  const posts = data.allMdx.nodes

  return (
    <>
      <h2 className="text-4xl font-light tracking-wide text-slate-800 py-2 mb-6 border-b-2 border-b-slate-700">
        Recent Posts
      </h2>
      <ul>
        {posts.map(post => (
          <li
            className="flex justify-between items-center text-xl font-light text-slate-700 py-2 px-4 my-4 bg-slate-100/50 rounded-sm border border-slate-700"
            key={post.id}
          >
            <Link
              className="hover:text-amber-400 transition"
              to={`/blog/${post.frontmatter.slug}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <p>{post.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RecentPosts
