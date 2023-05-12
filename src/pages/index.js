import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold text-sky-500 underline">Holi</h1>
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage
