import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className=" py-20 bg-amber-300 border-b-2 border-b-slate-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10">
        <h1 className="text-6xl leading-tight font-semibold tracking-wider text-slate-800 mb-6">
          Catch sentence.
        </h1>
        <h2 className="text-2xl text-slate-700 tracking-wide mb-6">
          Two lines sentence as a subtitle
        </h2>
        <Link
          className="inline-block bg-white text-slate-800 text-xl py-2 px-10 rounded-full border border-slate-800 font-light hover:bg-slate-800 hover:text-white transition"
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
