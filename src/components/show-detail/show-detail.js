import * as React from 'react'
import Layout from '../layout/layout'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { flex, content, pagination, disabled } from './show-detail.module.css'
import { Link } from 'gatsby';

function ShowDetail({ show, prevShow, nextShow }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Layout pageTitle={show.title}>
      <h2>{new Date(show.date).toLocaleString(undefined, options)}</h2>
      <div className={flex}>
        <img src={show.image.file.url} alt={show.image.title}/>
        <div className={content}>{renderRichText(show.description, {})}</div>
      </div>
      <div className={pagination}>
        {prevShow ? (
          <Link to={`/shows/${prevShow.slug}`}>&#9664; Previous</Link>
        ) : (
          <span className={disabled}>&#9664; Previous</span>
        )}
        {nextShow ? (
          <Link to={`/shows/${nextShow.slug}`}>Next &#9658;</Link>
        ) : (
          <span className={disabled}>Next &#9658;</span>
        )}
      </div>
    </Layout>
  )
}

export default ShowDetail
