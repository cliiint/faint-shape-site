import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      contentfulPage(slug: {eq: "home"}) {
        content {
          raw
        }
        slug
      }
    }
  `);

  const home = query.contentfulPage;

  return (
    <div>
      <h1>home page</h1>
    </div>
  )
}

export const Head = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  )
}

export default IndexPage