import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { list } from './shows.module.css'

const Shows = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulShow(sort: {date: DESC}) {
        edges {
          node {
            id
            title
            slug
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

  const shows = query.allContentfulShow.edges.map(edge => edge.node);
  const now = new Date();
  let past = [];
  let upcoming = [];

  shows.forEach(show => {
    const endOfShowDay = new Date(show.date).setUTCHours(23,59,59,999);
    endOfShowDay > now ? upcoming.push(show) : past.push(show);
  });

  const showList = (events, heading) => {
    return (
      <>
        <h2>{heading}</h2>
        <ul className={list}>
          {events.map(show => {
            return (
              <li key={show.id}>
                <Link to={`/shows/${show.slug}`}>
                  <img src={show.image.file.url} alt={show.image.title}/>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    )
  };

  return (
    <>
      <h1>Shows</h1>
      {upcoming.length && showList(upcoming, 'Upcoming')}
      {past.length && showList(upcoming, 'Past')}
    </>
  )
}

export default Shows