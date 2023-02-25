import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

function Page(props) {
  const { contentfulPage: contentfulPage } = props.data;

  return (
    <Layout pageTitle={contentfulPage.title}>
      <div>{renderRichText(contentfulPage.content)}</div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    contentfulPage( slug: { eq: $slug } ) {
      title
      slug
      content {
        raw
      }
    }
  }
`;

export const Head = (props) => {
  const { title } = props.data.contentfulPage;
  return <title>{title} | Faint Shape</title>
}