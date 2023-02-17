import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  title,
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `);

  const pages = query.allContentfulPage.edges.map(edge => edge.node);

  return (
    <div className={ container }>
      <nav>
        <ul className={ navLinks }>
          <li className={ navLinkItem }><Link className={ navLinkText } to="/">Home</Link></li>
          <li className={ navLinkItem }><Link className={ navLinkText } to="/shows">Shows</Link></li>
          {pages.map(page => {
            return (
              <li className={ navLinkItem } key={page.id}><Link className={ navLinkText } to={`/${page.slug}`}>{page.title}</Link></li>
            )
          })}
        </ul>
      </nav>
      <main>
        <h1 className={ title }>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout