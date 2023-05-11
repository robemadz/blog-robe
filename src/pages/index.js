import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold text-sky-500 underline">Holi</h1>
    <Link to="/page-2">Go to page-2</Link>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
