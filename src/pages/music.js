import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'
import { grid, gridItem } from '../styles/music.module.css'

const Music = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulRelease(sort: {releaseDate: DESC}) {
        edges {
          node {
            id
            cover {
              file {
                url
                fileName
              }
            }
            releaseDate
            slug
          }
        }
      }
    }
  `);

  const releases = query.allContentfulRelease.edges.map(edge => edge.node);
  console.log(releases)

  return (
    <Layout>
      <div className={grid}>
        {releases.map(release => {
          return (
            <Link className={gridItem} to={`/music/${release.slug}`}>
              <img src={release.cover.file.url} alt={release.cover.file.fileName} />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Music | Faint Shape</title>
    </>
  )
}

export default Music