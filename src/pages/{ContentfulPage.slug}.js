import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, MARKS } from '@contentful/rich-text-types'

function Page(props) {
  const { contentfulPage: contentfulPage } = props.data;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} target="_blank">{children}</a>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        if (node.data.target.__typename === 'ContentfulRelease') {
          const release = node.data.target;
          const { slug, cover } = release;
          return (
            <Link to={`/music/${slug}`}>
              <img style={{maxWidth: '400px', width: '100%'}} src={cover.file.url} alt={release.title} />
            </Link>
          )
        } else {
          return <p>Warning: entry hyperlink type of <b>{node.data.target.__typename}</b> unsupported on Page</p>;
        }
      }
    }
  }

  return (
    <Layout pageTitle={contentfulPage.title}>
      {renderRichText(contentfulPage.content, options)}
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
        references {
          ... on ContentfulRelease {
            contentful_id
            title
            __typename
            slug
            cover {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = (props) => {
  const { title } = props.data.contentfulPage;
  return <title>{title} | Faint Shape</title>
}