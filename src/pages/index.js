import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className=" py-20 bg-amber-300 border-b-2 border-b-slate-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10">
        <h1 className="text-6xl leading-tight font-medium mb-6">
          Catch sentence.
        </h1>
        <h2 className="text-2xl font-light mb-6">
          Two lines sentence as a subtitle
        </h2>
        <Link
          className="inline-block bg-slate-900 text-white text-xl py-2 px-10 rounded-full font-light"
          to="/blog"
        >
          Go to Blog
        </Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage
