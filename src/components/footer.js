import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="main-footer">
      <ul>
        <li>v.1.0</li>
        <li>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li>
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
        <li>© 2020 Johannes Schwegler </li>
      </ul>
    </footer>
  )
}
