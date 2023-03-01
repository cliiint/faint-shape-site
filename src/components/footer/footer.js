import * as React from 'react'
import { footer, links } from './footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <ul className={links}>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </footer>
  )
}

export default Footer