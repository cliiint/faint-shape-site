import * as React from 'react'
import { title, container } from './layout.module.css'
import Navigation from './navigation'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={ container }>
      <Navigation />
      <main>
        <h1 className={ title }>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout