import * as React from 'react'
import { graphql } from 'gatsby'
import ShowDetail from '../../components/show-detail/show-detail'

function Show(props) {
  const { contentfulShow } = props.data;

  return <ShowDetail show={contentfulShow} />
}

export default Show

export const query = graphql`
  query($slug: String!) {
    contentfulShow( slug: { eq: $slug } ) {
      title
      date
    }
  }
`;

export const Head = (props) => {
  const { title } = props.data.contentfulShow;
  return <title>{title} | Faint Shape</title>
}