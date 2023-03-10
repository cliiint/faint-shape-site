import * as React from 'react'
import { container, col } from './layout.module.css'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Layout = ({ pageTitle, children, hero = null }) => {
  return (
    <div className={ container }>
      <div className={ col }>
        <Navigation>{hero}</Navigation>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout