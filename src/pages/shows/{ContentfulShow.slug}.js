import * as React from "react"
import { graphql } from "gatsby"
import ShowDetailView from "../../views/show-detail"

function Show(props) {
  const { contentfulShow } = props.data;

  console.log(contentfulShow)

  return <ShowDetailView show={contentfulShow} />
}

export default Show

export const query = graphql`
  query($slug: String!) {
    contentfulShow( slug: { eq: $slug } ) {
      title
      location
      date
    }
  }
`;
