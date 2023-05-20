import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="bg-white border-b-2 border-b-slate-700">
    <nav className="flex justify-between items-center max-w-screen-2xl mx-auto py-4">
      <Link className="bg-amber-400/90 rounded-full mx-8" to="/">
        <StaticImage
          className="relative -top-1 -left-1"
          alt="basketball outlined icon"
          src="../images/basketball-icon.png"
        />
      </Link>
      <ul className="flex tracking-wider">
        <li className="mx-1 md:mx-2">
          <Link className="block px-4 md:px-6 py-2 hover:bg-amber-100" to="/">
            Home
          </Link>
        </li>
        <li className="mx-1 md:mx-2">
          <Link
            className="block px-4 md:px-6 py-2 hover:bg-amber-100"
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="mx-1 md:mx-2">
          <Link
            className="block px-4 md:px-6 py-2 hover:bg-amber-100"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
