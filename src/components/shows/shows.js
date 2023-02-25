import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Shows = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulShow {
        edges {
          node {
            id
            title
            slug
            description {
              raw
            }
            date(formatString: "MMMM Do, YYYY")
            image {
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

  const shows = query.allContentfulShow.edges.map(edge => edge.node);

  return (
    <ul>
      {shows.map(show => {
        return (
          <li key={show.id}>
            <img src={show.image.file.url} style={{height: '200px'}} />
            <p>{show.date}</p>
            <h2>{show.title}</h2>
            <Link to={`/shows/${show.slug}`}>go</Link>
          </li>
        );
      })}
    </ul>
  )
}

export default Shows