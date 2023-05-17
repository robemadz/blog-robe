import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="w-full px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="text-4xl md:text-6xl text-slate-700 mb-3">
        404: Page Not Found
      </h2>
      <p className="px-6 md:px-0 text-lg text-slate-600 mb-8">
        You just hit a route that doesn&#39;t exist...so sad.
      </p>
      <Link
        className="inline-block px-5 py-3 border border-slate-800 text-slate-800 bg-white rounded-sm text-lg hover:text-white hover:bg-slate-800 transition"
        to="/"
      >
        Go back Home
      </Link>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
