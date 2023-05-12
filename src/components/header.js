import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="bg-pink-500">
    <nav className="flex justify-between items-center max-w-screen-2xl mx-auto py-4">
      <Link to="/">
        <StaticImage
          alt="basketball outlined icon"
          src="../images/basketball-icon.png"
        />
      </Link>
      <ul className="flex font-medium">
        <li className="mx-2">
          <Link className="block px-6 py-2 hover:bg-emerald-500" to="/">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link className="block px-6 py-2 hover:bg-emerald-500" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
