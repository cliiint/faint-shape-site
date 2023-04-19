import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { list, row, tickets, day, flex, boxOffice, pastShows } from './shows.module.css'
import { useState } from 'react'

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
  const [showPast, setShowPast] = useState(false);

  shows.forEach(show => {
    const endOfShowDay = new Date(show.date).setUTCHours(23,59,59,999);
    endOfShowDay > now ? upcoming.push(show) : past.push(show);
  });

  const ticketsUrl = (show) => <a className={`${tickets} button`} href={show.ticketsUrl} target="_blank">Tickets</a>;
  const box = <p className={`${tickets} ${boxOffice}`}>Box Office</p>;
  const date = (utc) => {
    let formatted = new Date(utc).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    return formatted.substring(formatted.indexOf(',') + 2);
  };

  const handleClick = () => setShowPast(!showPast);

  const showList = (events, heading) => {
    return (
      <>
        <h2>{heading}</h2>
        <div className={list}>
          {events.map(show => {
            return (
              <div className={row} key={show.id}>
                <div className={day}>
                  <p>{date(show.date)}</p>
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
      <p className={pastShows} onClick={handleClick}>
        {showPast ? 'Hide past shows' : 'See past shows'}
      </p>
      {past.length > 0 && showPast && showList(past.reverse(), 'Past')}
    </>
  )
}

export default Shows