import * as React from 'react'
import { graphql } from 'gatsby'
import ShowDetail from '../../components/show-detail/show-detail'

function Show(props) {
  const { contentfulShow, allContentfulShow } = props.data;
  const shows = allContentfulShow.nodes;
  const currentIndex = shows.findIndex((show) => show.slug === contentfulShow.slug);

  const prevShow = currentIndex > 0 ? shows[currentIndex - 1] : null;
  const nextShow = currentIndex < shows.length - 1 ? shows[currentIndex + 1] : null;

  return <ShowDetail show={contentfulShow} prevShow={prevShow} nextShow={nextShow} />
}

export default Show

export const query = graphql`
  query($slug: String!) {
    contentfulShow( slug: { eq: $slug } ) {
      slug
      title
      date
      description {
        raw
      }
      image {
        title
        file {
          url
        }
      }
    }
    allContentfulShow(sort: { date: ASC }) {
      nodes {
        slug
        title
        date
      }
    }
  }
`;

export const Head = (props) => {
  const { title } = props.data.contentfulShow;
  return <title>{title} | Faint Shape</title>
}