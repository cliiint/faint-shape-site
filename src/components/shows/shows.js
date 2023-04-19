import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { list, row, tickets, day, flex, boxOffice } from './shows.module.css'

const Shows = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulShow(sort: {date: ASC}) {
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
            date(formatString: "MMM Do, YYYY")
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

  const ticketsUrl = (show) => <a className={`${tickets} button`} href={show.ticketsUrl} target="_blank">Tickets</a>;
  const box = <p className={`${tickets} ${boxOffice}`}>Box Office</p>;

  const showList = (events, heading) => {
    return (
      <>
        <h2>{heading}</h2>
        <div className={list}>
          {events.map(show => {
            return (
              <div className={row} key={show.id}>
                <div className={day}>
                  <p>{show.date}</p>
                  <p>{show.location}</p>
                </div>
                <div className={flex}>
                  <Link to={`/shows/${show.slug}`}>Details</Link>
                  {show.ticketsUrl ? ticketsUrl(show) : box}
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  };

  return (
    <>
      <h1>Shows</h1>
      {upcoming.length > 0 && showList(upcoming, 'Upcoming')}
      {past.length > 0 && showList(past, 'Past')}
    </>
  )
}

export default Shows