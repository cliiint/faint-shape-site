import * as React from 'react'
import Layout from '../layout/layout'

function ShowDetail({ show }) {
  return (
    <Layout>
      <h1>{show.title}</h1>
      <div>welcome to show view</div>
    </Layout>
  )
}

export default ShowDetail
