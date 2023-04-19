import * as React from 'react'
import Layout from '../layout/layout'
import Hero from '../hero/hero'
import { useStaticQuery, graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
    <Layout>
      <Hero/>
      <div>{!!home.content && renderRichText(home.content)}</div>
    </Layout>
  )
}

export default Home