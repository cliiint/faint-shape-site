import * as React from 'react'
import { title, container } from './layout.module.css'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Layout = ({ pageTitle, children, hero = null }) => {
  return (
    <div className={ container }>
      <Navigation>{hero}</Navigation>
      <main>
        <h1 className={ title }>{pageTitle}</h1>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout