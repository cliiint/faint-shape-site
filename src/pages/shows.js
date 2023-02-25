import * as React from 'react'
import Shows from '../components/shows/shows'
import Layout from '../components/layout/layout'

const ShowsPage = () => {
  return (
    <Layout>
      <Shows />
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Shows | Faint Shape</title>
    </>
  )
}

export default ShowsPage