import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from './navigation.module.css'

const Navigation = ({ children }) => {
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
    <div>
      {children}
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
    </div>
  )
}

export default Navigation