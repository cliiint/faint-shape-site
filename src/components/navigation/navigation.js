import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from './navigation.module.css'

const Navigation = ({ children }) => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulPage(filter: {slug: {ne: "home"}}) {
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
  const underline = { borderBottom: 'solid 4px #ffffff' };

  return (
    <div>
      {children}
      <nav>
        <ul className={ navLinks }>
          <li className={ navLinkItem }><Link activeStyle={underline} className={ navLinkText } to="/">Home</Link></li>
          <li className={ navLinkItem }><Link activeStyle={underline} className={ navLinkText } to="/shows">Shows</Link></li>
          {pages.map(page => {
            return (
              <li className={ navLinkItem } key={page.id}><Link activeStyle={underline} className={ navLinkText } to={`/${page.slug}`}>{page.title}</Link></li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation