import * as React from 'react'
import Layout from '../layout/layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { flex, content } from './show-detail.module.css'

function ShowDetail({ show }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Layout>
      <h1>{show.title}</h1>
      <h2>{new Date(show.date).toLocaleString(undefined, options)}</h2>
      <div className={flex}>
        <img src={show.image.file.url} alt={show.image.title}/>
        <div className={content}>{renderRichText(show.description, {})}</div>
      </div>
    </Layout>
  )
}

export default ShowDetail
