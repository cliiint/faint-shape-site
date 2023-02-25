import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Home = () => {
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
    <div>home component</div>
  )
}

export default Home