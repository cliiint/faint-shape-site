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
      allContentfulShow(sort: {date: DESC}, limit: 1) {
        edges {
          node {
            id
            title
            slug
            location
            ticketsUrl
            description {
              raw
            }
            date
            image {
              title
              file {
                fileName
                url
              }
            }
          }
        }
      }
    }
  `);

  const pages = query.allContentfulPage.edges.map(edge => edge.node);
  const underline = { borderBottom: 'solid 4px #ffffff' };

  const now = new Date();
  const shows = query.allContentfulShow.edges.map(edge => edge.node);
  const nextShow = shows.find(show => new Date(show.date).setUTCHours(23,59,59,999) > now);

  const nextShowTemplate = () => {
    if (nextShow) {
      const options = {
        month: 'short',
        day: 'numeric',
      };

      const dateObject = new Date(nextShow.date);
      const formatted = new Intl.DateTimeFormat("en-US", options).format(dateObject);

      return (
        <li className={ navLinkItem }>
          <Link className={ navLinkText } to={`/shows/${nextShow.slug}`}>{formatted}</Link>
        </li>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      {children}
      <nav>
        <ul className={ navLinks }>
          <li className={ navLinkItem }><Link activeStyle={underline} className={ navLinkText } to="/">Home</Link></li>
          <li className={ navLinkItem }><Link activeStyle={underline} className={ navLinkText } to="/shows">Shows</Link></li>
          <li className={ navLinkItem }><Link activeStyle={underline} className={ navLinkText } to="/music">Music</Link></li>
          {pages.map(page => {
            return (
              <li className={ navLinkItem } key={page.id}><Link activeStyle={underline} className={ navLinkText } to={`/${page.slug}`}>{page.title}</Link></li>
            )
          })}
          { nextShowTemplate() }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation