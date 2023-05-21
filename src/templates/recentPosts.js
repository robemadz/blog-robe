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
    <section>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
            <p>{post.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecentPosts
