import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="bg-zinc-100 border border-b-2 border-b-zinc-300">
    <nav className="flex justify-between items-center max-w-screen-2xl mx-auto py-4">
      <Link className="bg-pink-500/90 rounded-full mx-8" to="/">
        <StaticImage
          className="relative -top-1 -left-1"
          alt="basketball outlined icon"
          src="../images/basketball-icon.png"
        />
      </Link>
      <ul className="flex font-medium">
        <li className="mx-2">
          <Link className="block px-6 py-2 hover:bg-slate-200" to="/">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link className="block px-6 py-2 hover:bg-slate-200" to="/blog">
            Blog
          </Link>
        </li>
        <li className="mx-2">
          <Link className="block px-6 py-2 hover:bg-slate-200" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
