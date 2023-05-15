import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-white/70 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
