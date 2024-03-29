import * as React from 'react'
import { graphql } from 'gatsby'
import ReleaseDetail from '../../components/release-detail/release-detail'
import Layout from '../../components/layout/layout'

function Release(props) {
  const { contentfulRelease } = props.data;

  return (
    <Layout pageTitle={contentfulRelease.title}>
      <ReleaseDetail release={contentfulRelease} />
    </Layout>
  )
}

export default Release

export const query = graphql`
  query($slug: String!) {
    contentfulRelease( slug: { eq: $slug } ) {
      title
      songs {
        file {
          url
          fileName
        }
      }
      cover {
        file {
          url
        }
      }
      description {
        raw
      }
      purchaseUrl
    }
  }
`;

export const Head = (props) => {
  const { title } = props.data.contentfulRelease;
  return <title>{title} | Faint Shape</title>
}