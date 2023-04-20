import * as React from 'react'
import { container, col, rule, title } from './layout.module.css'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Layout = ({ pageTitle, children, hideRule = false }) => {
  return (
    <div className={ container }>
      <div className={ col }>
        <Navigation/>
        <main>
          <h1>{pageTitle}</h1>
          {!hideRule && <hr className={rule}></hr>}
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout